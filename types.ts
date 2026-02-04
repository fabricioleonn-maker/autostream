
export enum Screen {
  SPLASH = 'SPLASH',
  DASHBOARD = 'DASHBOARD',
  HOME_HUB = 'HOME_HUB',
  MULTITASKING = 'MULTITASKING',
  SETTINGS_MENU = 'SETTINGS_MENU',
  WIFI_SETTINGS = 'WIFI_SETTINGS',
  AUDIO_SETTINGS = 'AUDIO_SETTINGS',
  DISPLAY_SETTINGS = 'DISPLAY_SETTINGS',
  GENERAL_SETTINGS = 'GENERAL_SETTINGS',
  TECHNICAL_INFO = 'TECHNICAL_INFO',
  BLUETOOTH_SETTINGS = 'BLUETOOTH_SETTINGS'
}

export interface Network {
  id: string;
  name: string;
  signal: 'high' | 'medium' | 'low';
}

export interface Device {
  id: string;
  name: string;
  type: string;
  status: 'Connected' | 'Disconnected';
  icon: string;
}
