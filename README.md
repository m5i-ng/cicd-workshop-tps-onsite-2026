# CICD-workshop-tps-onsite-2026

GitHub Actions でビルド・テスト・GitHub Pages デプロイを行い、Datadog CI Visibility でパイプライン時間を比較するワークショップ用リポジトリです。

## ローカルでの確認

- Node.js 22 系（`.nvmrc` 参照）

```bash
npm ci
npm test
npm run build
```

成果物は `dist/index.html` です。

## GitHub の設定（初回）

1. **Settings → Pages → Build and deployment**: Source を **GitHub Actions** にする。
2. Datadog と GitHub の連携、および Datadog で CI Visibility を有効化する（事前準備リストに従う）。

## ブランチとワークフロー

- `main` / `dev` への push で CI が動き、GitHub Pages にデプロイします。
- `.github/workflows/ci.yml` 内の **SLOW BUILD**（デフォルト）と **FAST BUILD**（コメント）を切り替えて、`main` と `dev` で実行時間を比較できます。手順の詳細はワークフロー内コメントを参照してください。

## EC2 デプロイ

ワークフロー末尾にコメントアウトした例があります。本ワークショップでは GitHub Pages のみ使用します。
