#!/bin/bash

# 設定變數
CONTAINER_NAME="chi-website-container"
IMAGE_NAME="chi-website"
IMAGE_TAG="latest"
HOST_PORT=8080
CONTAINER_PORT=80
USE_CLOUDFLARE_TUNNEL=true
TUNNEL_ID="49b2f0eb-36db-4579-8748-7ad3e33a6265"
CRED_FILE="/Users/iewihc/.cloudflared/${TUNNEL_ID}.json"

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

# 處理命令行參數
for arg in "$@"; do
    case $arg in
        --no-tunnel)
            USE_CLOUDFLARE_TUNNEL=false
            shift
            ;;
        *)
            # 未知參數
            ;;
    esac
done

# 顯示開始訊息
echo_info "開始重建和重啟 Docker 容器..."

# 檢查 cloudflared 是否可用（如果需要使用）
if [ "$USE_CLOUDFLARE_TUNNEL" = true ]; then
    if ! command -v cloudflared &> /dev/null; then
        echo_error "未找到 cloudflared！如需使用 Cloudflare Tunnel，請先安裝。"
        echo_info "您可以從 https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation 下載"
        echo_info "或者使用 --no-tunnel 參數禁用 Cloudflare Tunnel"
        exit 1
    fi
    
    # 檢查憑證文件是否存在
    if [ ! -f "$CRED_FILE" ]; then
        echo_error "找不到 Cloudflare 隧道憑證文件：$CRED_FILE"
        echo_info "請確認您已正確設置 Cloudflare 隧道"
        USE_CLOUDFLARE_TUNNEL=false
    fi
fi

# 構建 Docker 映像
echo_info "構建 Docker 映像..."
docker build --no-cache -t ${IMAGE_NAME}:${IMAGE_TAG} .
if [ $? -ne 0 ]; then
    echo_error "Docker 映像構建失敗！"
    exit 1
fi
echo_success "Docker 映像構建成功！"

# 停止並刪除現有容器（如果存在）
echo_info "停止並刪除現有容器（如果存在）..."
docker stop ${CONTAINER_NAME} >/dev/null 2>&1
docker rm ${CONTAINER_NAME} >/dev/null 2>&1

# 啟動新容器
echo_info "啟動新容器..."
docker run -d -p ${HOST_PORT}:${CONTAINER_PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}:${IMAGE_TAG}
if [ $? -ne 0 ]; then
    echo_error "容器啟動失敗！"
    exit 1
fi
echo_success "容器啟動成功！"

# 顯示容器資訊
echo_info "容器資訊："
docker ps --filter "name=${CONTAINER_NAME}"

# 顯示存取網址
echo_success "網站已部署完成！"
echo_success "本地訪問：http://localhost:${HOST_PORT}"

# 啟動 Cloudflare Tunnel
start_cloudflare_tunnel() {
    echo_info "🌍 啟動 Cloudflare Tunnel，將 http://localhost:${HOST_PORT} 綁定到 https://dev.mr-chi-tech.com"
    
    # 建立臨時配置文件
    local TEMP_CONFIG="/tmp/cloudflared-config-${HOST_PORT}.yml"
    cat > "$TEMP_CONFIG" <<EOF
tunnel: $TUNNEL_ID
credentials-file: $CRED_FILE

ingress:
  - hostname: dev.mr-chi-tech.com
    service: http://localhost:${HOST_PORT}
  - service: http_status:404
EOF
    
    # 執行 tunnel
    echo_success "Cloudflare Tunnel 已配置完成"
    echo_success "您的網站將在 https://dev.mr-chi-tech.com 提供服務"
    echo_info "按 Ctrl+C 停止隧道"
    cloudflared tunnel --config "$TEMP_CONFIG" run "$TUNNEL_ID"
}

# 如果啟用了 Cloudflare Tunnel
if [ "$USE_CLOUDFLARE_TUNNEL" = true ]; then
    # 等待容器完全啟動
    echo_info "等待容器完全啟動..."
    sleep 5
    
    # 檢查容器是否可以訪問
    if curl -s http://localhost:${HOST_PORT} > /dev/null; then
        echo_success "容器已成功啟動且可訪問"
        start_cloudflare_tunnel
    else
        echo_error "無法連接到本地服務 http://localhost:${HOST_PORT}"
        echo_info "請手動檢查容器狀態"
    fi
fi 