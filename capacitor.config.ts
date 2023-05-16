import { CapacitorConfig, LiveUpdateConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'jon-capacitor-live-updates',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: 'b78e26a6',
      channel: 'Production',
      autoUpdateMethod: 'background',
    }
  }
};

export default config;
