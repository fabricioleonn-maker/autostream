
import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import SplashScreen from './screens/SplashScreen';
import Dashboard from './screens/Dashboard';
import HomeHub from './screens/HomeHub';
import Multitasking from './screens/Multitasking';
import SettingsMenu from './screens/SettingsMenu';
import WiFiSettings from './screens/WiFiSettings';
import AudioSettings from './screens/AudioSettings';
import DisplaySettings from './screens/DisplaySettings';
import GeneralSettings from './screens/GeneralSettings';
import TechnicalInfo from './screens/TechnicalInfo';
import BluetoothSettings from './screens/BluetoothSettings';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.SPLASH);

  useEffect(() => {
    if (currentScreen === Screen.SPLASH) {
      // Tempo aumentado para cobrir a animação do vídeo (aprox 5s)
      const timer = setTimeout(() => {
        setCurrentScreen(Screen.DASHBOARD);
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.SPLASH:
        return <SplashScreen />;
      case Screen.DASHBOARD:
        return <Dashboard onNavigate={navigateTo} />;
      case Screen.HOME_HUB:
        return <HomeHub onNavigate={navigateTo} />;
      case Screen.MULTITASKING:
        return <Multitasking onNavigate={navigateTo} />;
      case Screen.SETTINGS_MENU:
        return <SettingsMenu onNavigate={navigateTo} />;
      case Screen.WIFI_SETTINGS:
        return <WiFiSettings onNavigate={navigateTo} />;
      case Screen.AUDIO_SETTINGS:
        return <AudioSettings onNavigate={navigateTo} />;
      case Screen.DISPLAY_SETTINGS:
        return <DisplaySettings onNavigate={navigateTo} />;
      case Screen.GENERAL_SETTINGS:
        return <GeneralSettings onNavigate={navigateTo} />;
      case Screen.TECHNICAL_INFO:
        return <TechnicalInfo onNavigate={navigateTo} />;
      case Screen.BLUETOOTH_SETTINGS:
        return <BluetoothSettings onNavigate={navigateTo} />;
      default:
        return <Dashboard onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0B0F19] text-white">
      {renderScreen()}
    </div>
  );
};

export default App;
