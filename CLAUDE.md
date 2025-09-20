# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

More株式会社のコーポレートサイト。Next.js 14（App Router）、TypeScript、TailwindCSSを使用して構築されています。

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start

# ESLintによるリンティング
npm run lint
```

## アーキテクチャ

### ディレクトリ構造
- `src/app/`: Next.js App Routerのページとレイアウト
- `src/components/`: UIコンポーネント
  - `atoms/`: 基本的な再利用可能コンポーネント（Typography等）
  - `layout/`: レイアウトコンポーネント（Header、Footer、Body）
  - `uiParts/`: ページ固有のコンポーネントセクション
- `src/features/`: ビジネスロジック・機能
- `src/hooks/`: カスタムReact hooks

### スタイリング
- TailwindCSS使用（`tailwind.config.ts`でカスタムカラー定義）
  - `link-100`: #0277BD
  - `primary-100`: #F39C12
  - `secondary-100`: #1B4881
  - `secondary-10`: #FBFCFE
- Noto Sans JPフォント使用
- `tailwind-variants`でコンポーネントスタイル管理

### 重要な設定
- TypeScript: 厳格モード有効（`"strict": true`）
- パスエイリアス: `@/*` → `./src/*`
- 環境変数: `NEXT_PUBLIC_IS_DEV`でdev環境判定（noindexタグ制御）