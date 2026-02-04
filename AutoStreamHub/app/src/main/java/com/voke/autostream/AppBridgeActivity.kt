package com.voke.autostream

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.voke.autostream.databinding.ActivityAppBridgeBinding

class AppBridgeActivity : AppCompatActivity() {
    private lateinit var binding: ActivityAppBridgeBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityAppBridgeBinding.inflate(layoutInflater)
        setContentView(binding.root)
        val targetPackage = intent.getStringExtra("target_package")
        binding.tvStatus.text = "Iniciando STAR IBO DNS..."
        Handler(Looper.getMainLooper()).postDelayed({ launchTarget(targetPackage) }, 2000)
        binding.root.setOnClickListener { launchTarget(targetPackage) }
    }
    private fun launchTarget(pkg: String?) {
        if (!isFinishing && pkg != null) {
            val intent = packageManager.getLaunchIntentForPackage(pkg)
            if (intent != null) { startActivity(intent); finish() }
            else { binding.tvStatus.text = "App não encontrado"; binding.progressBar.visibility = View.GONE }
        }
    }
}
