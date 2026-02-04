
import React, { useRef, useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulação de progresso de carregamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay blocked or video not found:", err);
        setVideoError(true);
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={() => {}}
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source 
            src="https://raw.githubusercontent.com/lucas-m-pinto/auto-assets/main/autostream_premium.mp4" 
            type="video/mp4" 
          />
        </video>
      ) : null}

      {/* Camada de Interface: Logo e Carregamento */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-12 w-full max-w-md animate-in fade-in duration-1000">
        <div className="relative group">
          {/* Efeito de brilho externo */}
          <div className="absolute -inset-8 bg-sky-500/20 blur-[80px] rounded-full animate-pulse"></div>
          
          {/* Logo Triângulo Play Azul 3D */}
          <div className="relative w-40 h-40 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]">
                  <defs>
                      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#38bdf8', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 1 }} />
                      </linearGradient>
                      <filter id="shadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.5"/>
                      </filter>
                  </defs>
                  <rect x="20" y="20" width="160" height="160" rx="42" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                  <path d="M70,55 L150,100 L70,145 Z" fill="url(#logoGrad)" filter="url(#shadow)" />
                  <path d="M82,82 L115,100 L82,118 Z" fill="#0f172a" opacity="0.4" />
              </svg>
          </div>
        </div>

        <div className="w-full px-12 flex flex-col items-center space-y-4">
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-black tracking-[0.25em] text-white uppercase italic">
              AUTO<span className="text-sky-400">STREAM</span>
            </h1>
            <p className="text-[10px] text-sky-500/80 font-bold tracking-[0.6em] uppercase">
              PREMIUM EDITION
            </p>
          </div>

          {/* Animação de Carregamento */}
          <div className="w-full max-w-[200px] h-1 bg-white/10 rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest animate-pulse">
            Sincronizando Sistema... {progress}%
          </span>
        </div>
      </div>

      {/* Vinheta de acabamento premium */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 pointer-events-none z-10"></div>
    </div>
  );
};

export default SplashScreen;
