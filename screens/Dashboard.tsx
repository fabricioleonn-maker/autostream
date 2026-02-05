
import React, { useState, useEffect } from 'react';
import { Screen, AppConfig } from '../types';
import { APP_LIBRARY } from '../appIcons';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const currentDateTime = "Seg, 03 Fev • 10:30 AM • 24°C";

  const [sidebarApps, setSidebarApps] = useState<AppConfig[]>([]);
  const [dashboardApps, setDashboardApps] = useState<AppConfig[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showAppPicker, setShowAppPicker] = useState<{ type: 'sidebar' | 'dashboard', index?: number } | null>(null);
  const [activeWebApp, setActiveWebApp] = useState<string | null>(null);

  useEffect(() => {
    const savedSidebar = localStorage.getItem('sidebar_apps');
    const savedDashboard = localStorage.getItem('dashboard_apps');

    const syncAppsWithLibrary = (apps: any[]) => {
      console.log("Syncing apps with library...");
      return apps.map((app: any) => {
        if (!app || app.id === 'empty') return app;
        // Search by packageName first, then id, then name
        const libApp = APP_LIBRARY.find(a =>
          (a.packageName && a.packageName === app.packageName) ||
          a.id === app.id
        );
        if (libApp) {
          // Force the latest iconUrl and name from library
          return { ...app, ...libApp, id: app.id || libApp.id };
        }
        return app;
      });
    };

    if (savedSidebar) {
      let currentSidebar = syncAppsWithLibrary(JSON.parse(savedSidebar));

      const bingola = APP_LIBRARY.find(a => a.id === 'bingola')!;
      const star = APP_LIBRARY.find(a => a.id === 'star-ibo')!;

      const hasBingola = currentSidebar.some((a: any) => a.packageName === bingola.packageName);
      const hasStar = currentSidebar.some((a: any) => a.packageName === star.packageName);

      if (!hasBingola || !hasStar) {
        if (!hasBingola) currentSidebar.push(bingola);
        if (!hasStar) currentSidebar.push(star);
        setSidebarApps(currentSidebar);
        localStorage.setItem('sidebar_apps', JSON.stringify(currentSidebar));
      } else {
        setSidebarApps(currentSidebar);
        localStorage.setItem('sidebar_apps', JSON.stringify(currentSidebar));
      }
    } else {
      // YouTube, Netflix, Spotify, Prime, Chrome, Bingola, Star
      const defaults = [
        ...APP_LIBRARY.slice(0, 5),
        APP_LIBRARY.find(a => a.id === 'bingola')!,
        APP_LIBRARY.find(a => a.id === 'star-ibo')!
      ];
      setSidebarApps(defaults);
      localStorage.setItem('sidebar_apps', JSON.stringify(defaults));
    }

    if (savedDashboard) {
      let currentDashboard = syncAppsWithLibrary(JSON.parse(savedDashboard));

      // Auto-fill Bingola/Star if slots are empty and they aren't there
      const hasBingola = currentDashboard.some((a: any) => a.packageName === 'com.voke.bingola');
      if (!hasBingola) {
        const emptyIndex = currentDashboard.findIndex((a: any) => a.id === 'empty');
        if (emptyIndex !== -1) {
          currentDashboard[emptyIndex] = APP_LIBRARY.find(a => a.id === 'bingola')!;
        }
      }

      setDashboardApps(currentDashboard);
      localStorage.setItem('dashboard_apps', JSON.stringify(currentDashboard));
    } else {
      const defaults = APP_LIBRARY.slice(5, 9); // Waze, Maps, Disney, etc.
      setDashboardApps(defaults);
      localStorage.setItem('dashboard_apps', JSON.stringify(defaults));
    }
  }, []);

  const handleLaunchApp = (app: AppConfig) => {
    if (isEditMode || !app || (!app.packageName && !app.webUrl)) return;

    console.log("Attempting to launch:", app.name);

    if (app.mode === 'webview' && app.webUrl) {
      setActiveWebApp(app.webUrl);
      return;
    }

    if ((window as any).AndroidBridge) {
      (window as any).AndroidBridge.launchApp(app.packageName);
      return;
    }

    if (app.packageName) {
      const intentUrl = `intent:#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;package=${app.packageName};end`;
      const a = document.createElement('a'); a.href = intentUrl; a.style.display = 'none'; document.body.appendChild(a); a.click();
      setTimeout(() => { if (document.body.contains(a)) document.body.removeChild(a); }, 100);
    }
  };

  const handleDeleteApp = (id: string, type: 'sidebar' | 'dashboard') => {
    if (type === 'sidebar') {
      const updated = sidebarApps.filter(app => app.id !== id);
      setSidebarApps(updated);
      localStorage.setItem('sidebar_apps', JSON.stringify(updated));
    } else {
      const updated = dashboardApps.map(app => app.id === id ? { ...app, id: 'empty', name: 'Add', packageName: '', iconUrl: '' } : app);
      setDashboardApps(updated);
      localStorage.setItem('dashboard_apps', JSON.stringify(updated));
    }
  };

  const handleAddApp = (app: AppConfig) => {
    if (!showAppPicker) return;

    if (showAppPicker.type === 'sidebar') {
      const updated = [...sidebarApps, app];
      setSidebarApps(updated);
      localStorage.setItem('sidebar_apps', JSON.stringify(updated));
    } else if (showAppPicker.type === 'dashboard' && showAppPicker.index !== undefined) {
      const updated = [...dashboardApps];
      updated[showAppPicker.index] = app;
      setDashboardApps(updated);
      localStorage.setItem('dashboard_apps', JSON.stringify(updated));
    }
    setShowAppPicker(null);
  };

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

      {/* Main Content Area - Flexible Layout */}
      <div className="flex-1 flex gap-6 min-h-0 overflow-hidden">

        {/* Left Sidebar - Apps */}
        <div className="w-[80px] flex flex-col gap-4 overflow-y-auto hide-scrollbar pb-4 px-1" onContextMenu={(e) => { e.preventDefault(); setIsEditMode(true); }}>
          {sidebarApps.map((app) => (
            <div key={app.id} className="relative flex flex-col items-center group shrink-0 w-full">
              <div className="relative aspect-square w-full">
                <button
                  onClick={() => handleLaunchApp(app)}
                  onPointerDown={() => {
                    const timer = setTimeout(() => setIsEditMode(true), 800);
                    (window as any)._longPressTimer = timer;
                  }}
                  onPointerUp={() => clearTimeout((window as any)._longPressTimer)}
                  onPointerLeave={() => clearTimeout((window as any)._longPressTimer)}
                  className={`w-full h-full bg-slate-800/80 rounded-[1.25rem] flex items-center justify-center border border-white/5 shadow-xl transition-all active:scale-90 group-hover:bg-slate-700 ${isEditMode ? 'animate-pulse' : ''}`}
                >
                  <img src={app.iconUrl} alt={app.name} className="w-2/5 h-2/5 object-contain pointer-events-none" />
                </button>

                {isEditMode && (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDeleteApp(app.id, 'sidebar'); }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg z-30 hover:bg-red-500 border border-white/20"
                  >
                    ✕
                  </button>
                )}
              </div>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1 text-center truncate w-full">{app.name}</span>
            </div>
          ))}

          <button
            onClick={() => setShowAppPicker({ type: 'sidebar' })}
            className="flex flex-col items-center gap-1 group shrink-0 aspect-square w-full"
          >
            <div className="w-full h-full bg-emerald-500/10 rounded-[1.25rem] flex items-center justify-center border border-emerald-500/30 text-emerald-400 shadow-xl transition-all active:scale-95 group-hover:bg-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
            </div>
          </button>

          {isEditMode && (
            <button
              onClick={() => setIsEditMode(false)}
              className="mt-2 py-2 bg-sky-500 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-sky-500/20 shrink-0"
            >
              Done
            </button>
          )}

          <button onClick={() => onNavigate(Screen.MULTITASKING)} className="mt-auto flex flex-col items-center gap-1 shrink-0 aspect-square w-full">
            <div className="w-full h-full bg-sky-500/10 rounded-[1.25rem] flex items-center justify-center border border-sky-500/30 text-sky-400 shadow-lg shadow-sky-500/10 hover:bg-sky-500/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
            </div>
          </button>
        </div>

        {/* Right Side - Dashboard Widgets Grid */}
        {/* Changed from fixed cols to flexible grid that fills space */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 min-w-0">

          {/* Navigation Widget */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-5 flex flex-col relative overflow-hidden shadow-2xl group min-h-0">
            <div className="flex items-center gap-3 mb-2 shrink-0">
              <div className="text-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Navigation</span>
            </div>
            <div className="flex-1 bg-[#1E293B] rounded-3xl overflow-hidden relative min-h-0">
              <img src="https://picsum.photos/id/16/600/400" className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 bg-sky-500 p-2.5 rounded-2xl shadow-2xl flex justify-between items-center transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                <div className="text-slate-900 leading-tight">
                  <p className="text-[9px] font-bold uppercase opacity-70">Next Stop</p>
                  <p className="font-black text-xs sm:text-sm">Central Park Mall</p>
                </div>
                <div className="bg-slate-900/10 rounded-xl p-1.5 text-slate-900 font-bold text-[10px]">5 min</div>
              </div>
            </div>
          </div>

          {/* Music Widget */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-5 flex flex-col relative shadow-2xl min-h-0 overflow-hidden">
            <div className="flex items-center gap-3 mb-2 shrink-0">
              <div className="text-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Music</span>
            </div>
            <div className="flex flex-1 items-center gap-4 min-h-0">
              <div className="h-full aspect-square max-h-[120px] rounded-full border-4 border-sky-400/20 p-1 shrink-0 shadow-2xl">
                <div className="w-full h-full rounded-full bg-cover bg-center animate-[spin_15s_linear_infinite]" style={{ backgroundImage: 'url("https://picsum.photos/id/40/300/300")' }}></div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-black mb-1 truncate leading-tight">Neon Drift</h3>
                <p className="text-sky-400 font-medium mb-3 truncate text-xs sm:text-sm">Synthwave City • 2:45</p>
                <div className="flex items-center gap-4">
                  <button className="text-slate-500 hover:text-white transition-colors"><svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32V224a8,8,0,0,1-12.33,6.72L80,154.06V224a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0V101.94l115.67-76.66A8,8,0,0,1,208,32Z"></path></svg></button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-2xl active:scale-90 transition-transform"><svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M200,128a8,8,0,0,1-4.22,7.12l-120,64A8,8,0,0,1,64,192V64a8,8,0,0,1,11.78-7.12l120,64A8,8,0,0,1,200,128Z"></path></svg></button>
                  <button className="text-slate-500 hover:text-white transition-colors"><svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32a8,8,0,0,0-11.67-7.28L80.66,101.39A8,8,0,0,0,80.66,114.6l115.67,76.66A8,8,0,0,0,208,184V32Zm-16,134.41L99.23,108,192,46.33V166.41ZM80,32V184a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Z"></path></svg></button>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Status Widget */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-5 flex flex-col shadow-2xl min-h-0 overflow-hidden">
            <div className="flex items-center gap-3 mb-2 shrink-0">
              <div className="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Vehicle Hub</span>
            </div>
            <div className="flex-1 flex flex-col justify-between min-h-0">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-3xl sm:text-4xl font-black leading-none text-white">84<span className="text-lg text-slate-500">%</span></h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Battery</p>
                </div>
                <div className="text-right">
                  <h4 className="text-3xl sm:text-4xl font-black leading-none text-white">342<span className="text-lg text-slate-500">km</span></h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Range</p>
                </div>
              </div>
              <div className="h-3 w-full bg-slate-700/50 rounded-full overflow-hidden p-0.5 my-2">
                <div className="h-full bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all duration-1000" style={{ width: '84%' }}></div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 bg-white/5 rounded-2xl p-2 flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Tires</span>
                  <span className="text-[10px] font-bold text-emerald-400">OK</span>
                </div>
                <div className="flex-1 bg-white/5 rounded-2xl p-2 flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Service</span>
                  <span className="text-[10px] font-bold text-slate-300">2k km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customizable Apps Grid (Main 4) */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-5 flex flex-col shadow-2xl min-h-0 overflow-hidden">
            <div className="flex items-center gap-3 mb-2 shrink-0">
              <div className="text-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" /></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Favoritos</span>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1 min-h-0">
              {dashboardApps.map((app, index) => (
                <div key={index} className="relative group min-h-0">
                  <button
                    onClick={() => app.id === 'empty' ? setShowAppPicker({ type: 'dashboard', index }) : handleLaunchApp(app)}
                    onPointerDown={() => {
                      const timer = setTimeout(() => setIsEditMode(true), 800);
                      (window as any)._longPressTimer = timer;
                    }}
                    onPointerUp={() => clearTimeout((window as any)._longPressTimer)}
                    onPointerLeave={() => clearTimeout((window as any)._longPressTimer)}
                    className="w-full h-full bg-white/5 hover:bg-white/10 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all hover:scale-[1.02] active:scale-95 border border-white/5 p-1"
                  >
                    {app.id === 'empty' ? (
                      <div className="flex flex-col items-center gap-1 text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                      </div>
                    ) : (
                      <>
                        <img src={app.iconUrl} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" alt={app.name} />
                        <span className="text-[8px] font-bold uppercase tracking-widest text-white truncate max-w-[90%]">{app.name}</span>
                      </>
                    )}
                  </button>
                  {isEditMode && app.id !== 'empty' && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeleteApp(app.id, 'dashboard'); }}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg z-20 hover:bg-red-500 border border-white/20"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* App Picker Modal */}
      {showAppPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/60 backdrop-blur-md">
          <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="text-xl font-bold">Escolher Aplicativo</h2>
              <button
                onClick={() => setShowAppPicker(null)}
                className="p-2 bg-white/5 rounded-full hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-4 gap-4 hide-scrollbar">
              {APP_LIBRARY.map((app) => (
                <button
                  key={app.id}
                  onClick={() => handleAddApp(app)}
                  className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-3xl hover:bg-white/10 active:scale-95 transition-all border border-white/5"
                >
                  <img src={app.iconUrl} className="w-12 h-12 object-contain" alt={app.name} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center">{app.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Box Mode: Internal WebApp Viewer */}
      {activeWebApp && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col">
          <div className="absolute top-4 right-4 z-[110]">
            <button
              onClick={() => setActiveWebApp(null)}
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 shadow-2xl active:scale-90 transition-all border border-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
            </button>
          </div>
          <iframe
            src={activeWebApp}
            className="w-full h-full border-none"
            allow="autoplay; encrypted-media; fullscreen"
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
