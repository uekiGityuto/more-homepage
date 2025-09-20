# More Homepage

More 株式会社のコーポレートサイトです。

## 技術スタック

- **フレームワーク**: [Next.js 14](https://nextjs.org/) (App Router)
- **言語**: TypeScript
- **スタイリング**:
  - TailwindCSS
  - tailwind-variants
- **フォント**: Noto Sans JP (Google Fonts)
- **アナリティクス**: Google Analytics 4
- **デプロイ**: Cloudflare Pages

## 開発環境のセットアップ

### 必要な環境
- npm

### インストール

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local
# .env.localを編集して必要な値を設定
```

### 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアクセスできます。

## 主要なスクリプト

```bash
npm run dev    # 開発サーバーの起動
npm run build  # プロダクションビルド
npm run start  # プロダクションサーバーの起動
npm run lint   # ESLintによる静的解析
```

## プロジェクト構成

```
src/
├── app/              # Next.js App Router（ページ・レイアウト）
├── components/       # UIコンポーネント
│   ├── atoms/        # 基本コンポーネント
│   ├── layout/       # レイアウトコンポーネント
│   └── uiParts/      # ページ固有のコンポーネント
├── features/         # 機能・ビジネスロジック
└── hooks/           # カスタムReact Hooks
```

## デプロイ

### Cloudflare Pages

本プロジェクトはCloudflare Pagesでホストされています。

#### デプロイフロー
- **開発環境**: `dev`ブランチへのプッシュ/マージ → 開発環境へ自動デプロイ
- **本番環境**: `main`ブランチへのプッシュ/マージ → 本番環境へ自動デプロイ

#### ビルド設定
- **フレームワークプリセット**: Next.js
- **ビルドコマンド**: `npm run build`
- **ビルド出力ディレクトリ**: `.next`

### 環境変数

環境変数はCloudflare Pagesの管理画面で設定します。

#### Production環境
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # GA4のMeasurement ID
NEXT_PUBLIC_IS_DEV=false        # 本番環境フラグ
```

#### Preview環境（dev）
```
NEXT_PUBLIC_GA_ID=（任意）       # 未設定またはダミー値
NEXT_PUBLIC_IS_DEV=true         # 開発環境フラグ（noindexタグ有効）
```

### ローカル開発

ローカル開発では`.env.local`ファイルで環境変数を管理します：

```bash
# .env.local
NEXT_PUBLIC_GA_ID=              # GA4測定ID（省略可）
NEXT_PUBLIC_IS_DEV=true         # 開発フラグ
```

## ブランチ戦略

- `main`: 本番環境用ブランチ
- `dev`: 開発環境用ブランチ
- `feature/*`: 機能開発用ブランチ
- `fix/*`: バグ修正用ブランチ

## ライセンス

© 2024 More株式会社. All rights reserved.
