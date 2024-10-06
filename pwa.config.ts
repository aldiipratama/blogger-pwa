import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'My Blog',
  shortName: 'My Blog',
  description: 'My blog',
  direction: 'auto',
  language: 'id-ID',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '728c5364-5deb-42d8-a4c9-5857da62d864',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://alxdyy.blogspot.com',
} satisfies Config;
