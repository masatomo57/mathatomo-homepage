# ビルドステージ
FROM node:18-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ビルドを実行
RUN npm run build

# 実行ステージ
FROM nginx:alpine AS RUNNER

# 静的ファイルをコピー
COPY --from=builder /app/out /usr/share/nginx/html

# 開発環境用
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 本番環境用
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf

# コンテナがリッスンするポートを指定
EXPOSE 80