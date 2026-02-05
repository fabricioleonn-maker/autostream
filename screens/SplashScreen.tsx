import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
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

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-[#0B0F19] flex items-center justify-center relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-sky-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Camada de Interface: Logo e Carregamento */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-12 w-full max-w-md transition-all duration-1000 ease-out opacity-100 scale-100">
        <div className="relative group">
          {/* Efeito de brilho externo */}
          <div className="absolute -inset-8 bg-sky-500/20 blur-[60px] rounded-full animate-pulse"></div>

          {/* Logo Triângulo Play Azul 3D - CSS Pure */}
          <div className="relative w-48 h-48 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#38bdf8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Rounded Rect Base */}
              <rect x="20" y="20" width="160" height="160" rx="42"
                fill="#1e293b" stroke="#334155" strokeWidth="2" />

              {/* Play Triangle */}
              <path d="M70,55 L150,100 L70,145 Z"
                fill="url(#logoGrad)" filter="url(#glow)"
                className="animate-pulse" />

              {/* Gloss Effect */}
              <path d="M82,82 L115,100 L82,118 Z"
                fill="#0f172a" opacity="0.4" />
            </svg>
          </div>
        </div>

        <div className="w-full px-12 flex flex-col items-center space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-black tracking-[0.25em] text-white uppercase italic drop-shadow-xl">
              AUTO<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">STREAM</span>
            </h1>
            <p className="text-xs text-slate-400 font-bold tracking-[0.8em] uppercase border-t border-slate-800 pt-2 mt-2">
              Premium Edition
            </p>
          </div>

          {/* Animação de Carregamento */}
          <div className="w-full max-w-[240px] flex flex-col items-center gap-2">
            <div className="w-full h-1.5 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.6)] animate-shimmer"
                style={{
                  width: `${progress}%`,
                  backgroundSize: '200% 100%'
                }}
              ></div>
            </div>
            <div className="flex justify-between w-full text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <span>System Check</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
