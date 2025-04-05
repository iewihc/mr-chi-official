#!/bin/bash

# 更新 pnpm-lock.yaml 的腳本

echo "正在刪除現有的 node_modules 目錄..."
rm -rf node_modules

echo "正在刪除現有的 pnpm-lock.yaml 檔案..."
rm -f pnpm-lock.yaml

echo "正在安裝所有依賴，生成新的 pnpm-lock.yaml..."
pnpm install

echo "完成！新的 pnpm-lock.yaml 已生成。"
echo "請提交這個文件到 Git 倉庫以確保部署成功。" 