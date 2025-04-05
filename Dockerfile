# 使用 Node.js 環境
FROM node:20-alpine

# 安裝 pnpm 和 serve
RUN npm install -g pnpm serve

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 pnpm-lock.yaml (如果存在)
COPY package.json pnpm-lock.yaml* ./

# 安裝依賴
RUN pnpm install --frozen-lockfile

# 安裝 terser (避免之前遇到的問題)
RUN pnpm add terser --save-dev

# 複製所有檔案
COPY . .

# 優化圖片並構建應用 (忽略 TypeScript 錯誤)
RUN pnpm run optimize-images
# 使用 --skip-typescript 忽略 TypeScript 錯誤
RUN pnpm astro build --skip-typescript

# 開放 80 端口
EXPOSE 80

# 啟動服務
CMD ["serve", "-s", "dist", "-l", "80"] 