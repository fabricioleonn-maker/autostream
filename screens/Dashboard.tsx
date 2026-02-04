
import React from 'react';
import { Screen } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const currentDateTime = "Seg, 03 Fev • 10:30 AM • 24°C";

  return (
    <div className="h-full w-full bg-[#0B0F19] relative flex flex-col p-6 overflow-hidden">
      {/* Top Bar */}
      <header className="flex justify-between items-center mb-6 shrink-0">
        <span className="text-slate-400 font-medium text-sm tracking-wide">{currentDateTime}</span>
        <button onClick={() => onNavigate(Screen.SETTINGS_MENU)} className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
          </svg>
        </button>
      </header>

      {/* Main Grid Content */}
      <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
        {/* Left Side: Apps Sidebar */}
        <div className="col-span-2 flex flex-col gap-4 overflow-y-auto hide-scrollbar pb-4">
          {[
            { name: 'YouTube', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
            { name: 'Netflix', icon: 'https://cdn-icons-png.flaticon.com/512/5977/5977590.png' },
            { name: 'Spotify', icon: 'https://cdn-icons-png.flaticon.com/512/174/174872.png' },
            { name: 'Prime', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968830.png' },
            { name: 'Chrome', icon: 'https://cdn-icons-png.flaticon.com/512/281/281764.png' },
          ].map((app) => (
            <button key={app.name} onClick={() => onNavigate(Screen.HOME_HUB)} className="flex flex-col items-center gap-1 group shrink-0">
              <div className="w-14 h-14 bg-slate-800/80 rounded-[1.25rem] flex items-center justify-center border border-white/5 shadow-xl transition-all active:scale-95 group-hover:bg-slate-700">
                <img src={app.icon} alt={app.name} className="w-8 h-8 opacity-90" />
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{app.name}</span>
            </button>
          ))}
          <button onClick={() => onNavigate(Screen.MULTITASKING)} className="mt-auto flex flex-col items-center gap-1 shrink-0">
            <div className="w-14 h-14 bg-sky-500/10 rounded-[1.25rem] flex items-center justify-center border border-sky-500/30 text-sky-400 shadow-lg shadow-sky-500/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
            </div>
            <span className="text-[10px] text-sky-500 font-bold uppercase tracking-widest">Grid</span>
          </button>
        </div>

        {/* Center: Main Widgets - Explicitly managed row height to prevent cutoff */}
        <div className="col-span-10 grid grid-cols-2 grid-rows-2 gap-6 h-full min-h-0">
          {/* Navigation Widget */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-6 flex flex-col relative overflow-hidden shadow-2xl min-h-0 group">
            <div className="flex items-center gap-3 mb-4 shrink-0">
              <div className="text-sky-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Navigation</span>
            </div>
            <div className="flex-1 bg-[#1E293B] rounded-3xl overflow-hidden relative min-h-0">
              <img src="https://picsum.photos/id/16/600/400" className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-sky-500 p-3 rounded-2xl shadow-2xl flex justify-between items-center transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                <div className="text-slate-900 leading-tight">
                  <p className="text-[10px] font-bold uppercase opacity-70">Next Stop</p>
                  <p className="font-black text-sm">Central Park Mall</p>
                </div>
                <div className="bg-slate-900/10 rounded-xl p-2 text-slate-900 font-bold text-xs">5 min</div>
              </div>
            </div>
          </div>

          {/* Music Widget */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-6 flex flex-col relative shadow-2xl min-h-0">
             <div className="flex items-center gap-3 mb-4 shrink-0">
              <div className="text-pink-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Music</span>
            </div>
            <div className="flex flex-1 items-center gap-6 min-h-0">
              <div className="w-32 h-32 rounded-full border-4 border-sky-400/20 p-1 shrink-0 shadow-2xl">
                <div className="w-full h-full rounded-full bg-cover bg-center animate-[spin_15s_linear_infinite]" style={{backgroundImage: 'url("https://picsum.photos/id/40/300/300")'}}></div>
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="text-2xl font-black mb-1 truncate leading-tight">Neon Drift</h3>
                <p className="text-sky-400 font-medium mb-4 truncate text-sm">Synthwave City • 2:45</p>
                <div className="flex items-center gap-6">
                  <button className="text-slate-500 hover:text-white transition-colors"><svg width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32V224a8,8,0,0,1-12.33,6.72L80,154.06V224a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0V101.94l115.67-76.66A8,8,0,0,1,208,32Z"></path></svg></button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-2xl active:scale-90 transition-transform"><svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M200,128a8,8,0,0,1-4.22,7.12l-120,64A8,8,0,0,1,64,192V64a8,8,0,0,1,11.78-7.12l120,64A8,8,0,0,1,200,128Z"></path></svg></button>
                  <button className="text-slate-500 hover:text-white transition-colors"><svg width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32a8,8,0,0,0-11.67-7.28L80.66,101.39A8,8,0,0,0,80.66,114.6l115.67,76.66A8,8,0,0,0,208,184V32Zm-16,134.41L99.23,108,192,46.33V166.41ZM80,32V184a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Z"></path></svg></button>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Status Widget */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-6 flex flex-col shadow-2xl min-h-0">
             <div className="flex items-center gap-3 mb-4 shrink-0">
              <div className="text-emerald-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Vehicle Hub</span>
            </div>
            <div className="flex-1 flex flex-col justify-between min-h-0">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-4xl font-black leading-none text-white">84<span className="text-lg text-slate-500">%</span></h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Battery Level</p>
                </div>
                <div className="text-right">
                  <h4 className="text-4xl font-black leading-none text-white">342<span className="text-lg text-slate-500">km</span></h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Range</p>
                </div>
              </div>
              <div className="h-4 w-full bg-slate-700/50 rounded-full overflow-hidden p-1 my-3">
                <div className="h-full bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all duration-1000" style={{width: '84%'}}></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-3 flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Tires</span>
                   <span className="text-xs font-bold text-emerald-400">OK</span>
                </div>
                <div className="bg-white/5 rounded-2xl p-3 flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Service</span>
                   <span className="text-xs font-bold text-slate-300">In 2k km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Settings Widget */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-6 flex flex-col shadow-2xl min-h-0">
            <div className="flex items-center gap-3 mb-4 shrink-0">
              <div className="text-sky-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Quick Tools</span>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1 pb-2 min-h-0">
              <button onClick={() => onNavigate(Screen.AUDIO_SETTINGS)} className="bg-white/5 hover:bg-white/10 rounded-3xl flex flex-col items-center justify-center gap-2 p-4 transition-all hover:scale-105 active:scale-95 min-h-0 border border-white/5">
                <div className="w-10 h-10 bg-slate-700/50 rounded-2xl flex items-center justify-center text-sky-400 shrink-0 shadow-lg shadow-sky-500/10">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M160,32V224a8,8,0,0,1-12.91,6.31L77.25,176H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H77.25l69.84-54.31A8,8,0,0,1,160,32Zm-16,21.09L81.25,96.31A8,8,0,0,1,72,96H32v64H72a8,8,0,0,1,9.25-.31L144,202.91ZM216,128a40,40,0,0,1-11.72,28.28,8,8,0,1,1-11.31-11.31,24,24,0,0,0,0-33.94,8,8,0,0,1,11.31-11.31A40,40,0,0,1,216,128Zm32,0c0,30.93-12.04,59.91-33.92,81.59a8,8,0,1,1-11.16-11.49C222.18,178.6,232,154.19,232,128s-9.82-50.6-29.08-70.1a8,8,0,0,1,11.16-11.49C235.96,68.09,248,97.07,248,128Z"></path></svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white">Audio</span>
              </button>
              <button onClick={() => onNavigate(Screen.DISPLAY_SETTINGS)} className="bg-white/5 hover:bg-white/10 rounded-3xl flex flex-col items-center justify-center gap-2 p-4 transition-all hover:scale-105 active:scale-95 min-h-0 border border-white/5">
                 <div className="w-10 h-10 bg-slate-700/50 rounded-2xl flex items-center justify-center text-pink-400 shrink-0 shadow-lg shadow-pink-500/10">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Zm-8,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,208Z"></path></svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white">Display</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
