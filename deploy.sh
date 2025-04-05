#!/bin/bash

# 部署腳本：將網站部署到 Netlify 並配置 Cloudflare

# 顯示顏色輸出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # 無顏色

# 檢查必要的命令是否可用
check_command() {
  if ! command -v "$1" &> /dev/null; then
    echo -e "${RED}錯誤: $1 未安裝。請先安裝再繼續。${NC}"
    exit 1
  fi
}

check_command git
check_command pnpm

echo -e "${GREEN}=== 季先生官方網站部署腳本 ===${NC}"
echo "此腳本將幫助您部署網站到 Netlify 並配置 Cloudflare"
echo ""

# 構建項目
echo -e "${YELLOW}正在構建項目...${NC}"
pnpm run build
if [ $? -ne 0 ]; then
  echo -e "${RED}構建失敗！請修復錯誤後再試。${NC}"
  exit 1
fi
echo -e "${GREEN}構建成功！${NC}"
echo ""

# 提交到 Git
echo -e "${YELLOW}正在提交更改到 Git...${NC}"
git add .
echo "請輸入提交信息："
read commit_message
git commit -m "$commit_message"

# 推送到 GitHub
echo -e "${YELLOW}正在推送到 GitHub...${NC}"
git push
if [ $? -ne 0 ]; then
  echo -e "${RED}推送失敗！請檢查 Git 設置和連接。${NC}"
  exit 1
fi
echo -e "${GREEN}推送成功！${NC}"
echo ""

# 說明
echo -e "${GREEN}=== 部署流程已啟動 ===${NC}"
echo "1. 您的代碼已被推送到 GitHub"
echo "2. GitHub Actions 將自動構建並部署到 Netlify"
echo "3. 您可以在 GitHub 儲存庫的 Actions 頁面檢查部署狀態"
echo "4. 部署完成後，網站將可通過 Netlify URL 訪問"
echo "5. Cloudflare 會自動代理來自您域名的流量"
echo ""
echo -e "${YELLOW}重要提示：${NC}"
echo "- 首次設置時，請確保您已在 GitHub 中設置 NETLIFY_AUTH_TOKEN 和 NETLIFY_SITE_ID 密鑰"
echo "- 確保已在 Cloudflare 中正確配置 DNS 記錄，將域名指向 Netlify URL"
echo ""
echo -e "${GREEN}完成！${NC}" 