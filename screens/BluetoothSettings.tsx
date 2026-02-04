
import React from 'react';
import { Screen } from '../types';
import SharedLayout from '../components/SharedLayout';

interface BluetoothSettingsProps {
  onNavigate: (screen: Screen) => void;
}

const BluetoothSettings: React.FC<BluetoothSettingsProps> = ({ onNavigate }) => {
  const devices = [
    {
      name: 'Fone de ouvido',
      status: 'Conectado · Telefone, Música',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX7bK3EHkqRyklXCMdzrXCCSl09gUh1MtKh1L8_pgT0-sgjvSkyK0YtDMzeaxQWWx3DlA1b5BYAzr1fOaZOKCQSGNAJDvxM9TjBj3f6Ke_hAWzarh3S9MT3KofLPzziEsGIArGL_i5wFb_T0mvNd9Anfn0XxxYAg1vkvGppXyPpGSskKSWMeDh3qXZx_byFfxFdjnwcd_Gu1WHN_cifYn8VcUyCyKmF1Tw7mL9uoNGrSC2rtT-t5fNazdR-9oUpPePAzX9Ry8ygXs'
    },
    {
      name: 'Caixa de som',
      status: 'Desconectado · Música',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKTwhXAlRZsHxSMa_7CKl2XscMHM_e92ccrrJ2sCHu6Zesf2Stq4Si_8Iy2ePhsSIYu9-NlIP3g6RVOfyFRHYCO9X6lEgGoEmU9dkZIL12mpUnW0OobZDYlbjZIVC5IcREWr2QoggPA9iP1gZaDRg8SSkLZvaUmd0z2Ui484ZkOb9ck6vfGInRQ72P6fcmEPFFOJqQ1OAelbmRMnV7G-5HR_LC2bQylwb7g3WK_iOVKOtykuNmGgLDn50CPwPB_YI5Xk4ev725TM4'
    },
    {
      name: 'Relógio inteligente',
      status: 'Conectado · Telefone',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtIw7CRNVB-tAYVA6q3Jx4AReSWGEt9iF0o7Lp9Sh36hSUoPRhCA9ESJspwgi3ITI7zoyhhszHKSR5ztI3fPtU75Byj9OHxYSTP9ydRO83vPS4PLp_lSzsqlCUekw0wTSYNUKi0Wc1nm0VZzhjk0PmxHTDMfjAMEQ5qVAup2NWWn9U_5hcNPBSWf_s18fNzBT_mWNbyekT2JmdYPhZAnGMctLBhSySKc7OJomgUA9WnKw4kk5m-rSk-kqztEozkrf-dM_EAiQLwvI'
    }
  ];

  return (
    <SharedLayout title="Dispositivos Pareados" onBack={() => onNavigate(Screen.SETTINGS_MENU)}>
      <div className="space-y-6">
        {devices.map((dev, idx) => (
          <div key={idx} className="bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer border border-white/5">
            <div className="flex items-stretch justify-between gap-4">
              <div className="flex flex-col gap-1 flex-[2]">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Bluetooth</p>
                <p className="text-white text-lg font-extrabold">{dev.name}</p>
                <p className={`text-sm ${dev.status.includes('Conectado') ? 'text-sky-400 font-medium' : 'text-slate-500'}`}>{dev.status}</p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 shadow-lg group-hover:scale-105 transition-transform"
                style={{ backgroundImage: `url("${dev.img}")` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto py-8">
        <button className="w-full h-14 bg-sky-500 text-white font-black text-lg rounded-xl shadow-xl shadow-sky-500/20 active:scale-95 transition-all">
          Parear Novo Dispositivo
        </button>
      </div>
    </SharedLayout>
  );
};

export default BluetoothSettings;
