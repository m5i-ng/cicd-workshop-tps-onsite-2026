# cicd-workshop-tps-onsite-2026

GitHub Actions でビルド・テスト・GitHub Pages デプロイを行い、Datadog CI Visibility でパイプライン時間を比較するワークショップ用リポジトリです。

## ローカルでの確認

- Node.js 22 系（`.nvmrc` 参照）

```bash
npm ci
npm test
npm run build
```

成果物は `dist/index.html` です。

## 事前準備（Fork と Datadog側の有効化）

1. このリポジトリを Fork する。
2. Datadog 側で GitHub Apps の Integration を有効化し、対象を Fork したリポジトリに設定する。
3. Datadog の CI Visibility から、Fork したリポジトリを対象に設定を有効化する。

## GitHub の設定（初回）

1. **Settings → Pages → Build and deployment**: Source を **GitHub Actions** にする。

## ブランチとワークフロー

- `main` / `dev` への push で CI が動き、GitHub Pages にデプロイします。
- `.github/workflows/ci.yml` 内の **SLOW BUILD**（デフォルト）と **FAST BUILD**（コメント）を切り替えて、`main` と `dev` で実行時間を比較できます。手順の詳細はワークフロー内コメントを参照してください。

## EC2 デプロイ

ワークフロー末尾にコメントアウトした例があります。本ワークショップでは GitHub Pages のみ使用します。

---

# cicd-workshop-tps-onsite-2026 (English)

Workshop repository for building, testing, and deploying to GitHub Actions with GitHub Pages, and comparing pipeline duration in Datadog CI Visibility.

## Local setup

- Node.js 22 (see `.nvmrc`)

```bash
npm ci
npm test
npm run build
```

The build output is `dist/index.html`.

## Prerequisites (fork and Datadog)

1. Fork this repository.
2. In Datadog, enable the GitHub Apps integration and scope it to your forked repository.
3. In Datadog CI Visibility, enable settings for your forked repository.

## GitHub configuration (first time)

1. **Settings → Pages → Build and deployment**: set Source to **GitHub Actions**.

## Branches and workflow

- Pushes to `main` or `dev` run CI and deploy to GitHub Pages.
- In `.github/workflows/ci.yml`, switch between **SLOW BUILD** (default) and **FAST BUILD** (commented) to compare duration on `main` and `dev`. See comments in the workflow file for details.

## EC2 deployment

There is a commented example at the end of the workflow. This workshop uses GitHub Pages only.
