# 季先生官方網站 (Mr. Chi Official Website)

[![Netlify Status](https://api.netlify.com/api/v1/badges/174b4dee-cf75-45d3-abd3-33b2e7b07997/deploy-status)](https://app.netlify.com/sites/mr-chi/deploys)

基於 Astro + React + Tailwind 構建的季先生官方網站。

## 🔍 部署狀態

- 網站: [https://mr-chi-tech.com](https://mr-chi-tech.com)
- 部署平台: Netlify
- CDN/DNS: Cloudflare

## 🚀 專案架構

此 Astro 專案包含以下文件夾和文件:

```text
/
├── .husky/
│   └── _pre-commit
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Main.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│   │   └── index.astro
│   └── styles.css
└── .gitignore
└── .prettierrc
└── .prettierrc.mjs
└── astro.config.mjs
└── eslint.config.js
└── package.json
└── tailwind.config.mjs
└── tsconfig.json
```

Astro 會在 `src/pages/` 目錄中尋找 `.astro` 或 `.md` 文件。每個頁面都會根據其文件名暴露為路由。

任何靜態資產，如圖片，都可以放在 `public/` 目錄中。

## 🧞 指令

所有指令都從專案根目錄的終端機運行:

| 指令               | 操作                                      |
| :----------------- | :---------------------------------------- |
| `pnpm install`     | 安裝依賴                                  |
| `pnpm run dev`     | 啟動本地開發服務器，位址為 `localhost:4321` |
| `pnpm run build`   | 構建生產網站到 `./dist/`                  |
| `pnpm run preview` | 在部署前本地預覽構建                        |
| `pnpm run format`  | 使用 Prettier 格式化文檔                  |
| `pnpm run check`   | 使用 `astro check` 檢查類型               |
| `pnpm run lint`    | 檢查代碼風格與格式                         |

## Husky

要初始化 husky，請運行以下命令:

```sh
npx husky init
```

用 `_pre-commit` 的內容替換 `pre-commit` 文件內容