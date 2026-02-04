
import React from 'react';
import { Screen } from '../types';

interface MultitaskingProps {
  onNavigate: (screen: Screen) => void;
}

const Multitasking: React.FC<MultitaskingProps> = ({ onNavigate }) => {
  const openApps = [
    {
      title: 'Navegação',
      icon: 'near_me',
      color: 'text-sky-400',
      content: (
        <div className="absolute inset-0 bg-[#1e293b]">
           <img alt="Mapa" className="w-full h-full object-cover opacity-50 grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeJr-RrrPk6z4uHzoWPEH6ZLPR-l0Z50X-rOf0Eo8t961WzP4BujAlDfgkYkx5wXSqCDOgnKVBa2fM19A-HU_HpR8dYhreoMxNLCDtMzJvSo0H8FdHNW1jmbtzcm89EgMTVmnij9qtMYQixh52k2HHBPof965LR6DWtbPvxVi6KYzR8JTu_Y4PKtpo6_1PDfVGodRKvYyjic1vJGCDr-j2lx1x5Uq49ug1GR8ZyuD_t_utgCQVcQv2S_hfwzEYWY74iMlXbLJal58"/>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
             <path d="M 50 80 L 50 60 L 70 60 L 70 40 L 40 40 L 40 20" fill="none" stroke="#38BDF8" strokeLinecap="round" strokeWidth="4"></path>
             <circle cx="40" cy="20" fill="#38BDF8" r="4"></circle>
             <circle cx="50" cy="80" fill="#FFF" r="6"></circle>
           </svg>
           <div className="absolute bottom-4 left-4 right-4 bg-sky-500 text-slate-900 p-2 rounded-xl font-black text-center text-xs">Trabalho - 5 min</div>
        </div>
      )
    },
    {
      title: 'Climatização',
      icon: 'ac_unit',
      color: 'text-blue-400',
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center p-4">
          <div className="relative w-32 h-32 flex items-center justify-center">
             <div className="absolute inset-0 border-4 border-sky-500 rounded-full border-t-transparent animate-pulse"></div>
             <div className="text-center">
               <span className="text-4xl font-black">22</span>
               <span className="text-xl font-medium opacity-50">°C</span>
             </div>
          </div>
          <div className="mt-8 flex gap-3">
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path></svg></div>
             <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-slate-900 shadow-lg shadow-sky-500/30"><svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24a8,8,0,0,1,8,8v16a8,8,0,0,1-16,0V32A8,8,0,0,1,128,24Z"></path></svg></div>
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg></div>
          </div>
        </div>
      )
    },
    {
      title: 'Reproduzindo',
      icon: 'music_note',
      color: 'text-purple-400',
      content: (
        <div className="h-full w-full flex flex-col p-4 items-center gap-4">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/id/10/400/400" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="font-black truncate">Midnight City</h3>
            <p className="text-white/50 text-xs">M83</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="h-full w-full bg-[#0B0F19] font-['Inter'] flex flex-col overflow-hidden relative">
      {/* Background Decor */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] -z-10 rounded-full"></div>
      
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-6 text-lg font-bold">
          <span className="text-white/60">Seg, 03 Fev</span>
          <span className="text-white text-2xl">10:30</span>
          <div className="flex items-center text-sky-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,48a80,80,0,1,0,80,80A80.09,80.09,0,0,0,128,48Zm0,144a64,64,0,1,1,64-64A64.07,64.07,0,0,1,128,192Z"></path></svg>
            <span className="ml-1">24°C</span>
          </div>
        </div>
        <button onClick={() => onNavigate(Screen.SETTINGS_MENU)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <svg width="24" height="24" fill="white" opacity="0.7" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path></svg>
        </button>
      </header>

      <main className="flex-grow flex items-center justify-center relative">
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-[15vw] space-x-8 h-full items-center">
          {openApps.map((app, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[300px] h-[480px] bg-slate-800/40 backdrop-blur-xl rounded-[3rem] p-6 flex flex-col relative overflow-hidden border border-white/10 shadow-2xl transition-all hover:ring-2 hover:ring-sky-500/50 group">
              <div className="flex items-center space-x-2 mb-4">
                <div className={app.color}>
                   <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeWidth="16"></circle></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">{app.title}</span>
              </div>
              <div className="flex-grow bg-slate-900/50 rounded-3xl overflow-hidden relative shadow-inner">
                {app.content}
              </div>
              <button onClick={() => onNavigate(Screen.DASHBOARD)} className="mt-4 w-full py-3 bg-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Abrir App</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-10 flex flex-col items-center space-y-4">
        <div className="w-16 h-1 bg-white/10 rounded-full mb-2"></div>
        <button 
          onClick={() => onNavigate(Screen.DASHBOARD)}
          className="px-14 py-5 bg-white/5 hover:bg-white/10 active:scale-95 transition-all rounded-full flex items-center space-x-3 group border border-white/5 shadow-xl"
        >
          <svg className="text-white/50 group-hover:text-sky-400 transition-colors" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,63.51,209.49a12,12,0,0,1-17-17L111,128,46.51,63.51a12,12,0,0,1,17-17L128,111l64.49-64.49a12,12,0,0,1,17,17L145,128Z"></path></svg>
          <span className="font-black tracking-[0.2em] text-xs uppercase">Fechar Tudo</span>
        </button>
      </footer>
    </div>
  );
};

export default Multitasking;
