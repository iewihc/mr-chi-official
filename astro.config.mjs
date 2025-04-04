import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.cjs',
      // 讓 @astrojs/tailwind 自動處理 PostCSS 配置
      applyBaseStyles: false,
    })
  ],
  devToolbar: { enabled: true },

  vite: {
    server: {
      allowedHosts: ['.ngrok.io', 'localhost', 'dev.mr-chi-tech.com']
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true
      }
    }
  }
});
