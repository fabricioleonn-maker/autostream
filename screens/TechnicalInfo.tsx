
import React from 'react';
import { Screen } from '../types';
import SharedLayout from '../components/SharedLayout';

interface TechnicalInfoProps {
  onNavigate: (screen: Screen) => void;
}

const TechnicalInfo: React.FC<TechnicalInfoProps> = ({ onNavigate }) => {
  const specs = [
    { label: 'Versão do Software', value: 'v2.1.3' },
    { label: 'Espaço de Armazenamento', value: '128GB / 256GB' },
    { label: 'Modelo da Central', value: 'Central Multimídia 2023' },
    { label: 'Número de Série', value: 'SN-2023-12345' },
  ];

  return (
    <SharedLayout title="Informações Técnicas do Sistema" onBack={() => onNavigate(Screen.SETTINGS_MENU)}>
      <div className="space-y-0 mt-4">
        {specs.map((s, idx) => (
          <div key={idx} className="grid grid-cols-[1fr_2fr] py-5 border-t border-slate-700/50">
            <p className="text-slate-400 text-sm">{s.label}</p>
            <p className="text-white text-sm font-bold text-right">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <p className="text-white font-medium">Uso de Armazenamento</p>
          <p className="text-slate-400 text-sm">50% Utilizado</p>
        </div>
        <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
          <div className="h-full bg-sky-500 rounded-full w-1/2 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
        </div>
      </div>

      <div className="mt-auto py-8">
        <button className="w-full h-14 bg-sky-500 text-white font-black text-lg rounded-xl shadow-xl shadow-sky-500/20 active:scale-95 transition-all">
          Verificar Atualizações
        </button>
      </div>
    </SharedLayout>
  );
};

export default TechnicalInfo;
