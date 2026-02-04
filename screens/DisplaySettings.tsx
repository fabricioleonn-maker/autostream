
import React, { useState } from 'react';
import { Screen } from '../types';
import SharedLayout from '../components/SharedLayout';

interface DisplaySettingsProps {
  onNavigate: (screen: Screen) => void;
}

const DisplaySettings: React.FC<DisplaySettingsProps> = ({ onNavigate }) => {
  const [brightness, setBrightness] = useState(75);
  const [scale, setScale] = useState(50);
  const [theme, setTheme] = useState('dark');
  const [screensaver, setScreensaver] = useState(true);

  return (
    <SharedLayout title="Seg, 03 Fev • 10:30 • 24°C" onBack={() => onNavigate(Screen.SETTINGS_MENU)}>
      <div className="space-y-8">
        <section>
          <h3 className="text-white text-lg font-bold pb-2 pt-4">Tamanho da Tela</h3>
          <select className="w-full bg-[#223649] border-none text-white h-14 rounded-lg p-4 focus:ring-sky-500">
            <option>1024x600</option>
            <option>1280x720</option>
            <option>1920x1080</option>
          </select>
        </section>

        <section>
           <h3 className="text-white text-lg font-bold pb-2 pt-4">Fundo</h3>
           <button className="flex items-center gap-2 bg-[#223649] text-white font-bold h-12 px-6 rounded-lg hover:bg-slate-700">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
              </svg>
              Alterar Tela de Fundo
           </button>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
             <div className="flex justify-between items-center">
              <p className="text-white font-medium">Escala da Interface</p>
              <p className="text-sky-400 text-sm">{scale}</p>
            </div>
            <input 
              type="range"
              min="1" max="100" value={scale}
              onChange={(e) => setScale(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg accent-sky-500"
            />
          </div>

          <div className="space-y-3">
             <div className="flex justify-between items-center">
              <p className="text-white font-medium">Brilho</p>
              <p className="text-sky-400 text-sm">{brightness}</p>
            </div>
            <input 
              type="range"
              min="1" max="100" value={brightness}
              onChange={(e) => setBrightness(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg accent-sky-500"
            />
          </div>
        </section>

        <section>
          <div className="grid grid-cols-3 gap-2">
            {['Claro', 'Escuro', 'Automático'].map((t) => (
              <button 
                key={t}
                onClick={() => setTheme(t.toLowerCase())}
                className={`h-12 rounded-lg font-bold text-sm transition-all ${theme === t.toLowerCase() ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'bg-[#223649] text-slate-400'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-between py-4 border-t border-white/5">
          <div>
            <p className="text-white font-medium">Proteção de Tela</p>
            <p className="text-slate-400 text-sm">Ativar ou desativar a proteção de tela</p>
          </div>
           <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full bg-[#223649] p-0.5 transition-colors has-[:checked]:bg-[#258df4]">
            <input 
              type="checkbox" 
              className="invisible absolute" 
              checked={screensaver} 
              onChange={() => setScreensaver(!screensaver)} 
            />
            <div className={`h-full w-[27px] rounded-full bg-white shadow-lg transform transition-transform ${screensaver ? 'translate-x-[20px]' : 'translate-x-0'}`}></div>
          </label>
        </section>
      </div>
    </SharedLayout>
  );
};

export default DisplaySettings;
