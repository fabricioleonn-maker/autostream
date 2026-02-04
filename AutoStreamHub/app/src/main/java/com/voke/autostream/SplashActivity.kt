package com.voke.autostream

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.voke.autostream.databinding.ActivitySplashBinding

class SplashActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySplashBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySplashBinding.inflate(layoutInflater)
        setContentView(binding.root)
        val videoUri = Uri.parse("android.resource://" + packageName + "/" + R.raw.splash)
        binding.videoView.setVideoURI(videoUri)
        binding.videoView.setOnCompletionListener { goToHome() }
        binding.videoView.setOnErrorListener { _, _, _ -> goToHome(); true }
        binding.videoView.start()
        binding.root.setOnClickListener { goToHome() }
    }
    private fun goToHome() {
        if (!isFinishing) {
            startActivity(Intent(this, MainActivity::class.java))
            finish()
        }
    }
}
