
import React, { useState } from 'react';
import { Screen } from '../types';
import SharedLayout from '../components/SharedLayout';

interface AudioSettingsProps {
  onNavigate: (screen: Screen) => void;
}

const AudioSettings: React.FC<AudioSettingsProps> = ({ onNavigate }) => {
  const [volumes, setVolumes] = useState({
    general: 50,
    bass: 45,
    mid: 50,
    treble: 65
  });

  const updateVol = (key: keyof typeof volumes, val: number) => {
    setVolumes(prev => ({ ...prev, [key]: val }));
  };

  const sliders = [
    { key: 'general', label: 'Volume Geral' },
    { key: 'bass', label: 'Graves' },
    { key: 'mid', label: 'Médios' },
    { key: 'treble', label: 'Agudos' },
  ] as const;

  return (
    <SharedLayout title="Seg, 03 Fev · 10:30 · 24°C" onBack={() => onNavigate(Screen.SETTINGS_MENU)}>
      <div className="space-y-6">
        {sliders.map((s) => (
          <div key={s.key} className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-white text-base font-medium">{s.label}</p>
              <p className="text-slate-400 text-sm">{volumes[s.key]}</p>
            </div>
            <input 
              type="range"
              min="0"
              max="100"
              value={volumes[s.key]}
              onChange={(e) => updateVol(s.key, parseInt(e.target.value))}
              className="w-full h-1 bg-[#283039] rounded-lg appearance-none cursor-pointer accent-white"
            />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-white text-2xl font-bold mb-6">Equalizador</h2>
        <div className="grid grid-cols-2 gap-4">
          {['Pop', 'Rock', 'Jazz', 'Clássico'].map((preset) => (
            <button
              key={preset}
              className="flex items-center justify-center rounded-xl h-14 bg-[#283039] text-white font-bold hover:bg-slate-700 active:scale-95 transition-all"
            >
              {preset}
            </button>
          ))}
        </div>
      </div>
    </SharedLayout>
  );
};

export default AudioSettings;
