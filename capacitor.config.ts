import { CapacitorConfig, LiveUpdateConfig } from '@capacitor/cli';

const liveUpdateConfig: LiveUpdateConfig = {
  appId: 'b78e26a6',
  channel: 'Production',
  autoUpdateMethod: 'none',
}

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'jon-capacitor-live-updates',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: liveUpdateConfig
  }
};

export default config;
