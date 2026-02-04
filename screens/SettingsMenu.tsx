
import React from 'react';
import { Screen } from '../types';
import SharedLayout from '../components/SharedLayout';

interface SettingsMenuProps {
  onNavigate: (screen: Screen) => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ onNavigate }) => {
  const settingsItems = [
    {
      label: 'Som',
      title: 'Ajustes de áudio',
      desc: 'Volume e equalizador',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ayG5oaoEw1W_TZ9_U1H6R1ldCtZL6J2l1atAoxYtp8bPjZjEdNZGAOEMYiu1KA8JtQ1Q40zBS8qlkFG7FI3p_ONbNISgIIjtuo9i1FnrnxF7yZcqj4xTQyroXzbk8MOPEydcbwzDESeQ8w30qmz3ZPzHR4gY-l73V59HFYcxzhHhwgYsUn-nYMgHZdNBlzd91Q3EWm1FBOMDMpsF6qi2AQup_T5yi9utEq_NFAYLFucJP5gkHJSthkVu_9YeRqhW0hhhNEmH6NA',
      screen: Screen.AUDIO_SETTINGS
    },
    {
      label: 'Display',
      title: 'Configurações de tela',
      desc: 'Brilho e tema',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8tSvSDygBukBNHJMdP9haxcZ-9hEnA5-ph5Gm99bl_7OqviF1hZi4fGhIrYGXDKh-gUr-1kFCksraCjsE_dt2fu42lnypgIBs7FFbIihsZEspyBdTBBUUma1b_XWMDbhvRfG-uV5JtKLMaHEExOgw_KuWaWYC0cNnOE8CLqtwOY8OtujaWxMQO5Za3KfZg04rSdcXrtymQHxJgUOEmkQybcFPdJSZXRzQ1ewoa_gCotSI2uKMNRg2_0awUDbPUjcJgvSKxzNDQVs',
      screen: Screen.DISPLAY_SETTINGS
    },
    {
      label: 'Wi-Fi',
      title: 'Conexão',
      desc: 'Status da rede',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJN45np2a_RlJ00ajGO0Cb56CLU7XDyH75zI1hE3cEBcT_rAsUE9M7jK-Gj4uv6QiWgjHpq_DKmv8mQCS5xbwLF-CJ-SwdDBrtMl0YAZhCdxFuv42l97mgUA43aR9FmdYNIKQnsCOAFSiBh-bjpGfw4Igvxx6k3pQ-hKjIU7FjvjXReDWsRX2cb5vQXq5-IQRmaXRvZEVE8VVY2pjAakpW-i2cCK2mOZL1pm1koxV46EOpglYxVml270RN-mF8xTTZgbO-EzjD5fg',
      screen: Screen.WIFI_SETTINGS
    },
    {
      label: 'Bluetooth',
      title: 'Dispositivos',
      desc: 'Gerenciar conexões',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAw_OBD4AySBcak4hpzGovzDc3pJYLnO0A4EwggNk8Qg34bhaJnHeKfapVBly0PoG3Eslw0Ig4dr82UM3bWIIMBxUz-OvOuzFR6KqT4q7dY4YLSlIzuYahRFl-Nr4tWNkTfzfFtKAS2xTiWksN4X9R_tbODjVOogn5bJwTZZwl1RGs__Jmx_dwCvKYXh8QEAveELCNDFNx6atuyrA59NjFz4w31eHQUvF4bvgpeAeZMNMROxjdb4loH_wO2yRFlKnC4s2s1xy9ha8',
      screen: Screen.BLUETOOTH_SETTINGS
    },
    {
      label: 'Sistema',
      title: 'Informações',
      desc: 'Versão do sistema',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXr2qGejWQP9ipUulmiPfnW8__AdACxyBEBV9wO-TokiXp-nkDUVokBuyRxBjq6NDJn-7Kiws1k7eyKbsan-k1CZ65qhciASo8E3L94qb8kVddNL1DyMjFmNAlh9kffjYpsvtcIlZTMVyTvN5Y59mz1e_tYCCGVllRX8SZzc6CIRwwnrDh2XObsvRfE6NJWXwnEQkrD7oAOrt-50c2VYy6vYF5zkEwJtcxGLCWAWFFwP2xpHF_0NvOSeCmRkt42gDmCIMGVrwF12o',
      screen: Screen.TECHNICAL_INFO
    },
    {
      label: 'Geral',
      title: 'Configurações Gerais',
      desc: 'Idioma, data/hora, unidades',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD31eWP18rwkdj-n1rKBiYbbeCoxJ3RW9lW-ocXtE9g__ek2xln8q-RoPhxgaG1iONxKwThFssnr08FJyinY7e3YcLeaIWR-rEe7RmzBYZvpHWNdLFRJha5-qRf_PCz3hGePVa6rLYnh2NU5ZxcsGyDWvwv0v-7KzJeGCT06t6yfFCNDWXmEx7QBTEBRLDey1VvcSbzvSXBmEWvl88ZLauLp2Pwe_jiUUiX9Dx7fKA_eVmuHnobxhS-Jrstj7vahBVagD427WTSjQs',
      screen: Screen.GENERAL_SETTINGS
    }
  ];

  return (
    <SharedLayout title="Seg, 03 Fev · 10:30 · 24°C" showBack={false} onSettings={() => onNavigate(Screen.DASHBOARD)}>
      <div className="flex px-0 py-3 mb-4">
        <button onClick={() => onNavigate(Screen.HOME_HUB)} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#283039] text-white text-sm font-bold leading-normal">
          Perfil do Usuário
        </button>
      </div>

      <div className="space-y-4">
        {settingsItems.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => onNavigate(item.screen)}
            className="w-full text-left bg-transparent hover:bg-white/5 rounded-2xl transition-colors p-4 block"
          >
            <div className="flex items-stretch justify-between gap-4">
              <div className="flex flex-col gap-1 flex-[2]">
                <p className="text-[#9cabba] text-sm font-normal uppercase tracking-widest">{item.label}</p>
                <p className="text-white text-lg font-bold leading-tight">{item.title}</p>
                <p className="text-[#9cabba] text-sm font-normal">{item.desc}</p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 border border-white/5 shadow-inner"
                style={{ backgroundImage: `url("${item.img}")` }}
              ></div>
            </div>
          </button>
        ))}
      </div>
    </SharedLayout>
  );
};

export default SettingsMenu;
