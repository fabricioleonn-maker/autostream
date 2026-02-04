package com.voke.autostream.data
import android.content.Context
import android.content.Intent
import android.graphics.drawable.Drawable
data class AppInfo(val name: String, val packageName: String, val icon: Drawable?)
class AppsRepository(private val context: Context) {
    fun getInstalledApps(): List<AppInfo> {
        val apps = mutableListOf<AppInfo>()
        val pm = context.packageManager
        val intent = Intent(Intent.ACTION_MAIN, null).apply { addCategory(Intent.CATEGORY_LAUNCHER) }
        val resolveInfos = pm.queryIntentActivities(intent, 0)
        for (info in resolveInfos) {
            if (info.activityInfo.packageName == context.packageName) continue
            apps.add(AppInfo(info.loadLabel(pm).toString(), info.activityInfo.packageName, info.loadIcon(pm)))
        }
        return apps.sortedBy { it.name }
    }
    fun isAppInstalled(pkg: String): Boolean = try { context.packageManager.getPackageInfo(pkg, 0); true } catch (e: Exception) { false }
}
