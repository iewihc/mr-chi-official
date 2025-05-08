import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://mr-chi-tech.com',
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.cjs',
      // 讓 @astrojs/tailwind 自動處理 PostCSS 配置
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/admin/') && !page.includes('/private/'),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
    compressor({
      gzip: true,
      brotli: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
  ],
  devToolbar: { enabled: true },

  vite: {
    server: {
      allowedHosts: ['.ngrok.io', 'localhost', 'dev.mr-chi-tech.com']
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true
      },
      // 優化生產構建
      cssCodeSplit: true,
      assetsInlineLimit: 4096, // 4kb
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
        format: {
          comments: false
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            // 將大型依賴項拆分為獨立塊
            'react-vendor': ['react', 'react-dom'],
            'icons': ['react-icons'],
          }
        }
      }
    }
  },
  
  // 提高圖像優化支持
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
});
