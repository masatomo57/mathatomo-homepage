# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ビルド
RUN npm run build

# アプリケーションを起動
CMD ["npx", "serve", "-s", "out", "-l", "3000"]

# コンテナがリッスンするポートを指定
EXPOSE 3000