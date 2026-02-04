package com.voke.autostream

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import com.voke.autostream.data.AppsRepository
import com.voke.autostream.databinding.ActivityMainBinding
import com.voke.autostream.databinding.ItemFavoriteSlotBinding
import com.voke.autostream.ui.AppAdapter
import com.voke.autostream.utils.PlayStoreHelper
import com.voke.autostream.utils.WifiHelper
import java.text.SimpleDateFormat
import java.util.*

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var appsRepository: AppsRepository
    private lateinit var sharedPreferences: SharedPreferences
    private lateinit var appAdapter: AppAdapter
    private val timeHandler = Handler(Looper.getMainLooper())
    private val timeRunnable = object : Runnable {
        override fun run() {
            updateTime()
            timeHandler.postDelayed(this, 1000)
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        appsRepository = AppsRepository(this)
        sharedPreferences = getSharedPreferences("autostream_prefs", Context.MODE_PRIVATE)
        ensureDefaultSlots()
        setupTopBar()
        setupFavorites()
        setupSecondaryList()
    }

    private fun ensureDefaultSlots() {
        if (!sharedPreferences.contains("slot_0")) sharedPreferences.edit().putString("slot_0", "com.voke.bingola").apply()
        if (!sharedPreferences.contains("slot_1")) sharedPreferences.edit().putString("slot_1", "com.star.ibo.dns").apply()
    }

    private fun setupTopBar() {
        timeHandler.post(timeRunnable)
        binding.btnWifiSettings.setOnClickListener { WifiHelper.openWifiSettings(this) }
        binding.btnPlayStore.setOnClickListener { PlayStoreHelper.openPlayStore(this) }
    }

    private fun updateTime() {
        binding.tvTime.text = SimpleDateFormat("HH:mm", Locale.getDefault()).format(Date())
    }

    private fun setupSecondaryList() {
        appAdapter = AppAdapter(emptyList()) { app -> launchApp(app.packageName) }
        binding.rvSecondaryApps.layoutManager = LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)
        binding.rvSecondaryApps.adapter = appAdapter
        appAdapter.updateApps(appsRepository.getInstalledApps())
    }

    private fun setupFavorites() {
        updateSlot(binding.slot1, 0)
        updateSlot(binding.slot2, 1)
        updateSlot(binding.slot3, 2)
        updateSlot(binding.slot4, 3)
        updateSlot(binding.slot5, 4)
    }

    private fun updateSlot(slotBinding: ItemFavoriteSlotBinding, index: Int) {
        val pkgName = sharedPreferences.getString("slot_$index", null)
        if (pkgName != null && appsRepository.isAppInstalled(pkgName)) {
            val pm = packageManager
            val appInfo = pm.getApplicationInfo(pkgName, 0)
            slotBinding.tvName.text = pm.getApplicationLabel(appInfo)
            slotBinding.ivIcon.setImageDrawable(pm.getApplicationIcon(appInfo))
            slotBinding.root.setOnClickListener { launchApp(pkgName) }
        } else {
            slotBinding.tvName.text = "Escolher App"
            slotBinding.ivIcon.setImageResource(android.R.drawable.ic_menu_add)
            slotBinding.root.setOnClickListener { showAppSelectionDialog(index) }
        }
        slotBinding.root.setOnLongClickListener { showAppSelectionDialog(index); true }
    }

    private fun launchApp(packageName: String) {
        if (packageName == "com.star.ibo.dns") {
            val intent = Intent(this, AppBridgeActivity::class.java).apply { putExtra("target_package", packageName) }
            startActivity(intent)
        } else {
            val intent = packageManager.getLaunchIntentForPackage(packageName)
            intent?.let { startActivity(it) }
        }
    }

    private fun showAppSelectionDialog(index: Int) {
        val apps = appsRepository.getInstalledApps()
        AlertDialog.Builder(this)
            .setTitle("Editar Slot")
            .setItems(apps.map { it.name }.toTypedArray()) { _, choice ->
                sharedPreferences.edit().putString("slot_$index", apps[choice].packageName).apply()
                setupFavorites()
            }.show()
    }

    override fun onDestroy() {
        super.onDestroy()
        timeHandler.removeCallbacks(timeRunnable)
    }
}
