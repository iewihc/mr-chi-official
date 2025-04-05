# Docker 部署指南

本項目提供了兩個 Docker 腳本，用於開發和生產環境的部署。

## 開發環境

開發環境提供熱重載功能，當您更改代碼時會自動重新加載。

### 啟動開發環境

```bash
./dev-docker.sh
```

這將：
1. 建立一個開發用的 Docker 映像
2. 啟動一個 Docker 容器，映射 8080 端口到容器的 3000 端口
3. 將本地目錄掛載到容器中，實現代碼變更的即時反映
4. 顯示容器日誌

訪問 http://localhost:8080 查看網站開發版本。

## 生產環境

生產環境使用 Nginx 作為 Web 伺服器，提供優化過的靜態文件。

### 構建並啟動生產容器

```bash
./rebuild-docker.sh
```

這將：
1. 構建 Docker 映像，執行完整的構建過程
2. 停止並刪除之前的容器（如果存在）
3. 啟動一個新的容器，映射 8080 端口到容器的 80 端口

訪問 http://localhost:8080 查看生產版本的網站。

## 手動操作

如果您想手動操作 Docker 命令，可以參考以下步驟：

### 構建映像

```bash
# 生產映像
docker build -t chi-website:latest .

# 開發映像
docker build -f Dockerfile.dev -t chi-website-dev:latest .
```

### 運行容器

```bash
# 生產容器
docker run -d -p 8080:80 --name chi-website-container chi-website:latest

# 開發容器
docker run -d -p 8080:3000 -v $(pwd):/app -v /app/node_modules --name chi-website-dev chi-website-dev:latest
```

### 查看日誌

```bash
docker logs -f chi-website-container
# 或
docker logs -f chi-website-dev
```

### 停止並刪除容器

```bash
docker stop chi-website-container && docker rm chi-website-container
# 或
docker stop chi-website-dev && docker rm chi-website-dev
``` 