import { defineCollection, z } from 'astro:content';
import type { APIRoute } from 'astro';

const hostname = 'https://mr-chi-tech.com';

// 這些是我們網站的所有頁面
const pages = [
  { url: '/', lastmod: new Date().toISOString() },
  { url: '/posts', lastmod: new Date().toISOString() },
  // 所有博客文章
  { url: '/posts/case-1', lastmod: new Date().toISOString() },
  { url: '/posts/case-2', lastmod: new Date().toISOString() },
  { url: '/posts/case-3', lastmod: new Date().toISOString() },
  { url: '/posts/devops-pipeline', lastmod: new Date().toISOString() },
  { url: '/posts/ecommerce-platform', lastmod: new Date().toISOString() },
  { url: '/posts/erp-integration', lastmod: new Date().toISOString() },
  { url: '/posts/react-vs-vue', lastmod: new Date().toISOString() },
  { url: '/posts/restaurant-logo-design', lastmod: new Date().toISOString() },
  { url: '/posts/astro-in-brief', lastmod: new Date().toISOString() },
  { url: '/posts/business-card-design', lastmod: new Date().toISOString() },
];

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${pages.map((page) => `
  <url>
    <loc>${hostname}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.url === '/' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}; 