package com.voke.autostream.utils
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.widget.Toast
object PlayStoreHelper {
    fun openPlayStore(context: Context, pkg: String? = null) {
        val uri = Uri.parse(if (pkg != null) "market://details?id=$pkg" else "market://")
        val intent = Intent(Intent.ACTION_VIEW, uri).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        try { context.startActivity(intent) } catch (e: Exception) {
            val web = Intent(Intent.ACTION_VIEW, Uri.parse(if (pkg != null) "https://play.google.com/store/apps/details?id=$pkg" else "https://play.google.com"))
            try { context.startActivity(web.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)) } catch (ex: Exception) { Toast.makeText(context, "Play Store não disponível", Toast.LENGTH_SHORT).show() }
        }
    }
}
