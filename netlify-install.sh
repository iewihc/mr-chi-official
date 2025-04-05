#!/bin/bash

set -e  # 任何指令失敗就立即退出

echo "===== 開始 Netlify 部署流程 ====="

# 顯示環境資訊
echo "Node 版本: $(node -v)"
echo "NPM 版本: $(npm -v)"
echo "PNPM 版本: $(pnpm -v)"

# 清理現有檔案
echo "正在清理現有的依賴檔案..."
if [ -f "pnpm-lock.yaml" ]; then
  echo "- 刪除 pnpm-lock.yaml"
  rm pnpm-lock.yaml
fi

if [ -d "node_modules" ]; then
  echo "- 刪除 node_modules 目錄"
  rm -rf node_modules
fi

echo "===== 安裝依賴 ====="
echo "執行: pnpm install --prefer-offline --no-frozen-lockfile"
NODE_ENV=development pnpm install --prefer-offline --no-frozen-lockfile

# 確認安裝了所有必要依賴
echo "===== 確認關鍵依賴 ====="
if ! pnpm list terser > /dev/null; then
  echo "terser 依賴未找到，手動安裝..."
  pnpm add -D terser
fi

echo "===== 依賴安裝完成 ====="

# 確保構建目錄存在並乾淨
if [ -d "dist" ]; then
  echo "清理 dist 目錄..."
  rm -rf dist
fi
mkdir -p dist

echo "===== 準備完成，現在將執行構建 ====="
exit 0 