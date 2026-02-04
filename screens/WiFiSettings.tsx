
import React, { useState } from 'react';
import { Screen } from '../types';
import SharedLayout from '../components/SharedLayout';

interface WiFiSettingsProps {
  onNavigate: (screen: Screen) => void;
}

const WiFiSettings: React.FC<WiFiSettingsProps> = ({ onNavigate }) => {
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const networks = [
    { name: 'Rede Casa', icon: 'WifiHigh' },
    { name: 'Rede Trabalho', icon: 'WifiMedium' },
    { name: 'Rede Pública', icon: 'WifiLow' },
  ];

  return (
    <SharedLayout title="Conexão Wi-Fi" onBack={() => onNavigate(Screen.SETTINGS_MENU)}>
      <h3 className="text-white text-lg font-bold px-0 pb-2 pt-4">Redes Disponíveis</h3>
      
      <div className="space-y-2">
        {networks.map((net, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-transparent hover:bg-white/5 px-2 rounded-xl min-h-14 cursor-pointer transition-colors">
            <div className="text-white flex items-center justify-center rounded-lg bg-[#283039] shrink-0 size-10">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                 <path d="M140,204a12,12,0,1,1-12-12A12,12,0,0,1,140,204ZM237.08,87A172,172,0,0,0,18.92,87,8,8,0,0,0,29.08,99.37a156,156,0,0,1,197.84,0A8,8,0,0,0,237.08,87ZM205,122.77a124,124,0,0,0-153.94,0A8,8,0,0,0,61,135.31a108,108,0,0,1,134.06,0,8,8,0,0,0,11.24-1.3A8,8,0,0,0,205,122.77Zm-32.26,35.76a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94Z"></path>
               </svg>
            </div>
            <p className="text-white text-base font-normal flex-1 truncate">{net.name}</p>
          </div>
        ))}
      </div>

      <h3 className="text-white text-lg font-bold px-0 pb-2 pt-8">Detalhes da Rede</h3>
      <div className="flex flex-col gap-4 py-3">
        <label className="flex flex-col w-full">
          <p className="text-white text-base font-medium pb-2">Nome da Rede</p>
          <input
            className="form-input w-full rounded-lg text-white border-none bg-[#283039] h-14 placeholder:text-[#9cabba] p-4 text-base focus:ring-sky-500"
            placeholder="Digite o nome da rede..."
          />
        </label>
      </div>

      <div className="mt-auto flex flex-col gap-4 py-8">
        <button className="w-full max-w-[200px] h-12 rounded-lg bg-[#258df4] text-white font-bold hover:bg-sky-500 transition-colors">
          Conectar
        </button>

        <div className="flex items-center justify-between gap-4 py-2 border-t border-white/5 pt-6">
          <p className="text-white text-base">Wi-Fi</p>
          <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full bg-[#283039] p-0.5 transition-colors has-[:checked]:bg-[#258df4]">
            <input 
              type="checkbox" 
              className="invisible absolute" 
              checked={wifiEnabled} 
              onChange={() => setWifiEnabled(!wifiEnabled)} 
            />
            <div className={`h-full w-[27px] rounded-full bg-white shadow-lg transform transition-transform ${wifiEnabled ? 'translate-x-[20px]' : 'translate-x-0'}`}></div>
          </label>
        </div>
      </div>
    </SharedLayout>
  );
};

export default WiFiSettings;
