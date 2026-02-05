package com.voke.autostream

import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Bundle
import android.webkit.*
import androidx.appcompat.app.AppCompatActivity
import com.voke.autostream.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    companion object {
        private const val BASE_URL = "file:///android_asset/index.html"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setupWebView()
    }

    private fun setupWebView() {
        val webSettings = binding.webView.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.allowFileAccess = true
        webSettings.allowContentAccess = true
        webSettings.allowUniversalAccessFromFileURLs = true
        webSettings.mediaPlaybackRequiresUserGesture = false

        // Bridge Interface
        binding.webView.addJavascriptInterface(WebAppInterface(this), "AndroidBridge")

        // Handle Intents and internal navigation
        binding.webView.webViewClient = object : WebViewClient() {
            override fun onReceivedError(view: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
                if (request?.isForMainFrame == true) {
                    val errorHtml = """
                        <html>
                            <body style="background-color: #0B0F19; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px;">
                                <h1 style="color: #1E88E5;">Conexão Falhou</h1>
                                <p>Não foi possível conectar ao servidor em:</p>
                                <code style="background: #1e293b; padding: 10px; border-radius: 5px;">$BASE_URL</code>
                                <p style="margin-top: 20px; font-size: 0.9em; color: #94a3b8;">Verifique se o computador está ligado, com o comando 'npm run dev' rodando, e se o celular está na mesma rede Wi-Fi.</p>
                                <button onclick="location.reload()" style="margin-top: 30px; padding: 10px 20px; background: #1E88E5; color: white; border: none; border-radius: 5px; cursor: pointer;">Tentar Novamente</button>
                            </body>
                        </html>
                    """.trimIndent()
                    view?.loadDataWithBaseURL(null, errorHtml, "text/html", "UTF-8", null)
                }
            }

            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                val url = request?.url?.toString() ?: return false
                
                if (url.startsWith("intent:")) {
                    try {
                        val intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME)
                        if (intent != null) {
                            val info = packageManager.resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY)
                            if (info != null) {
                                startActivity(intent)
                            } else {
                                val fallbackUrl = intent.getStringExtra("browser_fallback_url")
                                fallbackUrl?.let { view?.loadUrl(it) }
                            }
                            return true
                        }
                    } catch (e: Exception) {
                        e.printStackTrace()
                    }
                }
                return false
            }
        }

        // ChromeClient for console logs and progress
        binding.webView.webChromeClient = WebChromeClient()

        // Load the Dashboard from local assets
        binding.webView.loadUrl(BASE_URL)
    }

    // JS Bridge class
    class WebAppInterface(private val mContext: Context) {
        @JavascriptInterface
        fun launchApp(packageName: String) {
            try {
                val intent = mContext.packageManager.getLaunchIntentForPackage(packageName)
                if (intent != null) {
                    mContext.startActivity(intent)
                } else {
                    android.widget.Toast.makeText(mContext, "App não encontrado: $packageName", android.widget.Toast.LENGTH_LONG).show()
                }
            } catch (e: Exception) {
                e.printStackTrace()
                android.widget.Toast.makeText(mContext, "Erro ao abrir: ${e.message}", android.widget.Toast.LENGTH_LONG).show()
            }
        }
    }

    override fun onBackPressed() {
        if (binding.webView.canGoBack()) {
            binding.webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
