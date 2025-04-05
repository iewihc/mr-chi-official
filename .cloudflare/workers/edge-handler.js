/**
 * Cloudflare Worker 腳本
 * 提供額外的功能，如安全標頭、重定向和緩存控制
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 獲取原始響應
  let response = await fetch(request)
  
  // 克隆響應以修改
  let newResponse = new Response(response.body, response)
  
  // 添加安全標頭
  newResponse.headers.set('X-XSS-Protection', '1; mode=block')
  newResponse.headers.set('X-Content-Type-Options', 'nosniff')
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  newResponse.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
  
  // 檢查是否為HTML響應
  const contentType = newResponse.headers.get('content-type') || ''
  if (contentType.includes('text/html')) {
    // 為 HTML 添加額外的緩存控制
    newResponse.headers.set('Cache-Control', 'public, max-age=3600')
  } else if (contentType.includes('image/') || 
             contentType.includes('font/') || 
             contentType.includes('application/javascript') ||
             contentType.includes('text/css')) {
    // 為靜態資源設置更長的緩存
    newResponse.headers.set('Cache-Control', 'public, max-age=86400')
  }

  // 網址重定向邏輯
  const url = new URL(request.url)
  
  // 將老頁面重定向到新頁面（示例）
  if (url.pathname === '/old-page') {
    return Response.redirect(`${url.origin}/new-page`, 301)
  }
  
  // 處理尾部斜線
  if (url.pathname.endsWith('/') && url.pathname.length > 1) {
    return Response.redirect(url.origin + url.pathname.slice(0, -1) + url.search, 301)
  }

  return newResponse
} 