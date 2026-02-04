
import React from 'react';
import { Screen } from '../types';
import SharedLayout from '../components/SharedLayout';

interface GeneralSettingsProps {
  onNavigate: (screen: Screen) => void;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ onNavigate }) => {
  const settings = [
    {
      label: 'Idioma',
      title: 'Português',
      desc: 'Altere o idioma do sistema',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoQGRH_hhulgxfSgAoFaVj2fQeNzLlZcUzR15gMesAtRLRSKi9GLGcpO0EO0ABVl5v-frZ-nyznaEWUpWwCsnrZBnKBBa3PFdH8C4MYfZaOeW7dosJsT6--20BEPGWjKqew-4CWHTbg-XHBF_9IlSmk2of0OPhlkjDrDYTTgOM6w5frUnfZlz25j5eOdr23diPPQ7LltFisocFYE3-7jgag4QURAd9COrLs5d9XY4axfc4uY5Ae_bJqdpDBl5mBSHmqRd6BiWopmw'
    },
    {
      label: 'Data e Hora',
      title: 'Ajuste Automático',
      desc: 'Sincronizar via rede',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjhbFI23xrAXzNQsMF-9NIoyW96AD-Aj72teB7njyOywqis4ZB3306JDnEt948hVxe8kVL0X3z8mrXPV5MNhVFn6tcerTaALCv4vcLuGQZjkn9y_QflGXPNIuSDIv09CanSKAY8h2fpnhD80cxpxEVuL_W5mrP21F7ukLej132zcczLwHe5bCLnEbht49PBBi0sATmpyRL04wctiO1Wnk3K5tB5WAZVmDMmOoa1xpMauZZyFk2fptsKhNS1gkJCm8uerSH5OrbEWs'
    },
    {
      label: 'Unidades',
      title: 'Celsius, KM',
      desc: 'Métricas de temperatura',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmFUAWDXqyXhsE6SPrqZlJ-9Q37UshO4VTdz-N6tgbP2h1AfKfMYlRDcDopKf0lmh2AoOZJqu2h5VB7AaVFHHRNOMB7xlGaU5d9UeIH1CvKkYA2ukQbR3BldNL5ASLU22bzMiDSrrVeGpIpN8UGhUGtLDhxt0eYRQ-9q7Dspdnk8_n5qeKlhzKDWYzW9zMuX9jettJUQBhSPGkufXkU-ayyxu3U5gNYHWPlE1akKJYyA1g1jrHDdkqmXZ_fB114-ki8nxRCHVFhT8'
    }
  ];

  return (
    <SharedLayout title="Configurações Gerais" onBack={() => onNavigate(Screen.SETTINGS_MENU)}>
      <div className="space-y-4">
        {settings.map((s, idx) => (
          <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <div className="flex items-stretch justify-between gap-4">
              <div className="flex flex-col gap-1 flex-[2]">
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{s.label}</p>
                <p className="text-white text-lg font-bold">{s.title}</p>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 shadow-md border border-white/10"
                style={{ backgroundImage: `url("${s.img}")` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto py-8">
        <button className="w-full h-12 bg-slate-800 text-white font-bold rounded-lg border border-red-500/30 hover:bg-slate-700 hover:border-red-500 transition-colors">
          Redefinir Configurações
        </button>
      </div>
    </SharedLayout>
  );
};

export default GeneralSettings;
