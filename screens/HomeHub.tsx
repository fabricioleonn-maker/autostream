
import React from 'react';
import { Screen } from '../types';

interface HomeHubProps {
  onNavigate: (screen: Screen) => void;
}

const HomeHub: React.FC<HomeHubProps> = ({ onNavigate }) => {
  return (
    <div className="flex h-full w-full flex-col bg-[#111a22] overflow-hidden font-['Manrope']">
      {/* Header with Search */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <div className="flex-1 mr-4">
          <div className="flex w-full items-stretch rounded-2xl h-14 shadow-xl bg-[#233648]/60 backdrop-blur-md">
            <div className="text-[#92adc9] flex items-center justify-center pl-5">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
            </div>
            <input className="flex-1 bg-transparent border-none text-white focus:ring-0 placeholder:text-[#92adc9] px-4 text-lg" placeholder="Search apps" />
          </div>
        </div>
        <button onClick={() => onNavigate(Screen.DASHBOARD)} className="flex items-center justify-center rounded-full h-14 w-14 bg-[#233648]/40 text-white hover:bg-slate-700">
          <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        </button>
      </div>

      {/* Main Content Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-32 hide-scrollbar">
        {/* Recommended Hero */}
        <div className="mb-8">
          <p className="text-[#92adc9] text-xs font-bold uppercase tracking-widest mb-3 px-1">Recommended for You</p>
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e2e3d] to-[#111a22] p-1 ring-1 ring-white/10 shadow-2xl">
            <div 
              className="w-full h-64 bg-center bg-no-repeat bg-cover rounded-[1.4rem] relative flex flex-col justify-end p-6 overflow-hidden" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlJmLyc-LzQoFlTkeeIhqiF08_bP8AiI55MIjUJEsHx2xz78yjleXVFB6H2q8ZmbFHBIQ5xNxfkkYpMKh1p5vSnZ2d-8xSBFwDj44ewcAA1H9BM_5Veo19rFzKGkoks_Z0FlJ_zq4vIdMwEnGNC2l53By6ep9Efoqz0CetFke1g4_0yVlA9LZaNOSeyjgPsRw11wUBatIjL-PVhEDGGFxSCmaPElRkMHrRqEo5o_PcYI23RfTSfvT_I-MgbhV3H4zu2TZNJ77IZD4")'}}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-white text-3xl font-extrabold tracking-tight">Spotify</p>
                <p className="text-[#92adc9] text-sm font-medium">Continue where you left off</p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        {[
          {
            title: 'Your Music',
            items: [
              { name: 'YouTube Music', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC8BJveMC2CLS1aNRdLmmHQtHAXx_egcejZFzlVBJWBes8qMmRSvKazXu-PIWtRRNctBsbw-tkhVA3jCJZQOsbwkViTAFOl7dnvKPvtzA28INoU9LTF7bQtok3Q4DQI5MGOFywuNA-eJM35ntql6BVa1nxi7QO3bA95KU3t1qRnjRzBydD_o-oa-5EjEpYx9J5_k1f-MJfDhykML6eIquDEvKHOQnrOAoHnfvMf6o5zipvH16D7VE2fx5tJYUBEqL2Wqj-A-Ywwm0' },
              { name: 'Apple Music', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAraaY1KH-PgaxnC7nVMv6pnd1tm6vzLq6OVpQgDpQrML8_Hxr6JjBTN3wV1CxH03l3cN9xxcowjxWlnKIKW2U_PVeuaIZEcOkVvhtULLc_2ajLqJpp8ou9ksKfSjDFss3gxaFQ3MOoQVhuTDZDrdVXp1tSKB83cqZ-jbVH9qfWuwh_EqWPFZSYCl5fYibHTydIFDGyVadXIWUU3PYIvm7FNiGLMmXuxxoRFcj7qc8v-P38oD9Zsyp_L6Du3Cbf2nCGSXD_kg_uHgM' },
            ]
          },
          {
            title: 'Podcasts & More',
            items: [
              { name: 'Audible', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoHCZCYKY9nsCGYBfWEryEdEo55tLOaHRqM_Nhx5GafF5TtaRbAPcmvV7IYwcX4sB2zhlo1mCKaTU04QYz8bbZ4-MVcemE1qsIqjV9trJitpS2mysCO2Nq-SLWrRhFVpwv_wtrsYM6nSCuAjwmllSFG_OWII6k1rpGL4fdht-z02CLcK3LpNQhKMfTrzUeFifSwmCKJGgL-HQo08jo9qLK2Dz_ZIZ0K2qPwOnbI01s9Zh3fWkgVq0_TVUykbw5dMVxJMfEdtSGhaY' },
              { name: 'iHeartRadio', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKwd9gBYUUqfCeDrext0IcdQVsjB8KoMrNHsh8_LqgiYuNQ1wgThi4QQblhPdmIxQsmod08NppAsRmVxxe5kgrctu4KWsk7jv2_BIMa2dGd5g-kx8t762fGvhDXu6-xfA7ieb87unV853OW4xgLPxniv8RhaQ4nq1lGpbTb7mrXU2xpGtrasURHTbQamzEHQpLwFpLJMjInlbh9qHpIevJKLvyzIHXJlNL4K3JCQ7aoVT57kr5JGPEGQkZ5oSPB0leYE-TH4Lv3Bc' },
            ]
          }
        ].map((cat, idx) => (
          <div key={idx} className="mb-8">
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className="text-white text-xl font-bold">{cat.title}</h2>
              <span className="text-[#92adc9] text-xs font-semibold tracking-widest">SEE ALL</span>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {cat.items.map((item, i) => (
                <div key={i} className="flex flex-col gap-2 min-w-[200px]">
                  <div className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-2xl shadow-lg border border-white/5" style={{backgroundImage: `url("${item.img}")`}}></div>
                  <p className="text-white text-sm font-bold truncate">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 bg-[#111a22]/80 backdrop-blur-2xl border-t border-white/5 px-6 pt-4 pb-8 flex justify-around">
        <button onClick={() => onNavigate(Screen.DASHBOARD)} className="text-sky-400">
           <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28"><path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path></svg>
        </button>
        <button onClick={() => onNavigate(Screen.MULTITASKING)} className="text-[#92adc9]">
           <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28"><path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"></path></svg>
        </button>
        <button onClick={() => onNavigate(Screen.SETTINGS_MENU)} className="text-[#92adc9]">
           <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path></svg>
        </button>
      </nav>
    </div>
  );
};

export default HomeHub;
