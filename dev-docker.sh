#!/bin/bash

# 設定變數
CONTAINER_NAME="chi-website-dev"
IMAGE_NAME="chi-website-dev"
IMAGE_TAG="latest"
HOST_PORT=8080
CONTAINER_PORT=3000
LOCAL_DIR=$(pwd)

# 顯示執行資訊的函數
echo_info() {
    echo -e "\033[1;34m[INFO]\033[0m $1"
}

echo_success() {
    echo -e "\033[1;32m[SUCCESS]\033[0m $1"
}

echo_error() {
    echo -e "\033[1;31m[ERROR]\033[0m $1"
}

# 創建開發用 Dockerfile
cat > Dockerfile.dev << EOF
FROM node:20-alpine

# 安裝 pnpm
RUN npm install -g pnpm

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# 安裝依賴
RUN pnpm install

# 添加 terser
RUN pnpm add terser --save-dev

# 開放開發伺服器端口
EXPOSE 3000

# 啟動開發伺服器
CMD ["pnpm", "start"]
EOF

# 顯示開始訊息
echo_info "開始構建開發環境容器..."

# 構建 Docker 映像
echo_info "構建開發 Docker 映像..."
docker build -f Dockerfile.dev -t ${IMAGE_NAME}:${IMAGE_TAG} .
if [ $? -ne 0 ]; then
    echo_error "Docker 映像構建失敗！"
    exit 1
fi
echo_success "Docker 映像構建成功！"

# 停止並刪除現有容器（如果存在）
echo_info "停止並刪除現有容器（如果存在）..."
docker stop ${CONTAINER_NAME} >/dev/null 2>&1
docker rm ${CONTAINER_NAME} >/dev/null 2>&1

# 啟動新容器，掛載本地目錄
echo_info "啟動開發容器..."
docker run -d \
    -p ${HOST_PORT}:${CONTAINER_PORT} \
    -v ${LOCAL_DIR}:/app \
    -v /app/node_modules \
    --name ${CONTAINER_NAME} \
    ${IMAGE_NAME}:${IMAGE_TAG}
if [ $? -ne 0 ]; then
    echo_error "開發容器啟動失敗！"
    exit 1
fi
echo_success "開發容器啟動成功！"

# 顯示容器資訊
echo_info "容器資訊："
docker ps --filter "name=${CONTAINER_NAME}"

# 顯示存取網址
echo_success "開發伺服器已啟動！"
echo_success "請訪問：http://localhost:${HOST_PORT}"
echo_info "所有代碼更改將自動重新加載。"
echo_info "按 Ctrl+C 查看容器日誌..."

# 顯示容器日誌
docker logs -f ${CONTAINER_NAME} 