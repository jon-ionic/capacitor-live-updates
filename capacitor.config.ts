import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'jon-capacitor-live-updates',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
