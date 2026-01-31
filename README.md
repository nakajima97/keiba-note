# keiba-note

競馬の馬券購入記録・分析アプリケーション

## 技術スタック
- Laravel 12 + Sail (Docker)
- Inertia.js v2
- React 18
- Tailwind CSS
- MySQL 8.4
- Redis

## 開発環境のセットアップ

### 初回のみ
```bash
cd src
./vendor/bin/sail up -d
```

## 開発コマンド

### 開発開始
```bash
# 1. プロジェクトディレクトリに移動
cd src

# 2. Dockerコンテナを起動（Laravel、MySQL、Redis）
./vendor/bin/sail up -d

# 3. Vite開発サーバーを起動（React のホットリロード用）
./vendor/bin/sail npm run dev
```

**アクセス:**
- アプリケーション: http://localhost
- Vite開発サーバー: http://localhost:5173

### 開発停止
```bash
# 1. Vite開発サーバーを停止（Ctrl+C で終了）

# 2. Dockerコンテナを停止
./vendor/bin/sail down
```

### よく使うコマンド
```bash
# データベースマイグレーション
./vendor/bin/sail artisan migrate

# データベースリセット＆再マイグレーション
./vendor/bin/sail artisan migrate:fresh

# Tinker（対話型コンソール）
./vendor/bin/sail artisan tinker

# Composerパッケージのインストール
./vendor/bin/sail composer require パッケージ名

# npmパッケージのインストール
./vendor/bin/sail npm install パッケージ名

# 本番用ビルド
./vendor/bin/sail npm run build

# データベース接続
./vendor/bin/sail mysql

# コンテナのログ確認
./vendor/bin/sail logs

# コンテナの状態確認
./vendor/bin/sail ps

# テスト実行
./vendor/bin/sail artisan test
```