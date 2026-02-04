package com.voke.autostream.ui
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.voke.autostream.data.AppInfo
import com.voke.autostream.databinding.ItemAppSmallBinding
class AppAdapter(private var apps: List<AppInfo>, private val onClick: (AppInfo) -> Unit) : RecyclerView.Adapter<AppAdapter.VH>() {
    fun updateApps(new: List<AppInfo>) { apps = new; notifyDataSetChanged() }
    override fun onCreateViewHolder(p: ViewGroup, t: Int) = VH(ItemAppSmallBinding.inflate(LayoutInflater.from(p.context), p, false))
    override fun onBindViewHolder(h: VH, pos: Int) {
        val app = apps[pos]
        h.binding.tvAppName.text = app.name
        h.binding.ivAppIcon.setImageDrawable(app.icon)
        h.binding.root.setOnClickListener { onClick(app) }
    }
    override fun getItemCount() = apps.size
    inner class VH(val binding: ItemAppSmallBinding) : RecyclerView.ViewHolder(binding.root)
}
