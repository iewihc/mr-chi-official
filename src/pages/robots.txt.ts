import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const robotsTxt = `
User-agent: *
Allow: /

# 禁止爬取私人或管理頁面
Disallow: /admin/
Disallow: /private/

# 站點地圖位置
Sitemap: https://mr-chi-tech.com/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}; 