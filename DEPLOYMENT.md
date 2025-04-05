# 部署指南：GitHub + Netlify + Cloudflare

本文件說明如何使用 GitHub、Netlify 和 Cloudflare 來部署此 Astro 網站。

## 1. GitHub 設定

1. 將專案推送到 GitHub 儲存庫：

```bash
git init
git add .
git commit -m "初始提交"
git branch -M main
git remote add origin https://github.com/你的用戶名/mr-chi-official-website.git
git push -u origin main
```

2. 在 GitHub 專案中設置下列密鑰（Settings > Secrets and variables > Actions）：
   - `NETLIFY_AUTH_TOKEN`：從 Netlify 用戶設置獲取的訪問令牌
   - `NETLIFY_SITE_ID`：Netlify 網站 ID

## 2. Netlify 設定

1. 在 [Netlify](https://app.netlify.com/) 註冊並登入
2. 點擊 "Add new site" > "Import an existing project"
3. 選擇 GitHub 作為 Git 提供商並授權
4. 選擇你的專案儲存庫
5. 配置構建設置：
   - 構建命令：`pnpm run build`
   - 發布目錄：`dist`
   - 進階設置 > 新增環境變數（如果需要）
6. 點擊 "Deploy site"
7. 從 Netlify 網站設置獲取以下資訊：
   - 在用戶設置中獲取 `NETLIFY_AUTH_TOKEN`
   - 在網站設置中找到 `NETLIFY_SITE_ID`
   - 網站 URL（例如 `yoursite.netlify.app`）

## 3. Cloudflare 設定

1. 在 [Cloudflare](https://dash.cloudflare.com/) 註冊並登入
2. 添加你的網站域名（例如 `mr-chi-tech.com`）
3. 按照指示將你的域名伺服器更改為 Cloudflare 提供的伺服器
4. 在 Cloudflare 控制台中：

   ### DNS 設置
   - 添加 CNAME 記錄，將 `@` 和 `www` 指向你的 Netlify 網站 URL
   - 確保兩個記錄都開啟了 Cloudflare 代理功能（橙色雲朵）

   ### SSL/TLS 設置
   - 模式：完全（嚴格）
   - 開啟 "Always Use HTTPS"
   - 設置最低 TLS 版本為 1.2

   ### 頁面規則
   - 創建規則使所有流量使用 HTTPS
   - 設置緩存級別為"積極"
   - 設置瀏覽器緩存 TTL 和邊緣緩存 TTL

   ### 速度設定
   - 開啟自動優化
   - 開啟 Brotli 壓縮
   - 開啟 HTTP/2 和 HTTP/3 (QUIC)

## 4. 驗證部署

1. 推送更改到 GitHub 儲存庫的 main 分支
2. 檢查 GitHub Actions 工作流程執行情況
3. 驗證 Netlify 建置和部署是否成功
4. 確認網站通過你的域名可訪問且正常運作
5. 使用 [WebPageTest](https://www.webpagetest.org/) 或 Lighthouse 檢查網站效能

## 故障排除

1. **GitHub Actions 失敗**：
   - 確認秘密變數是否正確設置
   - 檢查工作流程文件語法是否有誤

2. **Netlify 建置失敗**：
   - 查看構建日誌了解錯誤原因
   - 確認 Node.js 和 PNPM 版本設置是否正確
   - 測試本地構建是否成功 (`pnpm run build`)
   - 如果出現 "terser not found" 錯誤，請運行 `pnpm add -D terser` 安裝缺失的依賴
   - 如果出現 lockfile 不匹配錯誤 (`ERR_PNPM_OUTDATED_LOCKFILE`)，您可以：
     - 在本地運行 `./update-lock.sh` 生成新的 lock 文件並提交
     - 或在 netlify.toml 中修改構建命令為 `pnpm install --no-frozen-lockfile && pnpm run build`

3. **Cloudflare 問題**：
   - 確認 DNS 記錄是否正確配置
   - 檢查 SSL/TLS 設置
   - 暫時禁用 Cloudflare 代理測試直接連接到 Netlify

## 重要資源

- [GitHub Actions 文檔](https://docs.github.com/en/actions)
- [Netlify 文檔](https://docs.netlify.com/)
- [Cloudflare 文檔](https://developers.cloudflare.com/) 