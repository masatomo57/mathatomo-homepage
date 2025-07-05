# カラーガイド

このプロジェクトで使用するカラーパレットのガイドです。色はTailwind Configurationで定義されています。

## カスタムカラー定義

### Primary Colors
- **primary**: `#d97706` (amber-600) - 見出しや重要なテキストに使用

### Text Colors
- **secondary**: `#374151` (gray-700) - 本文、説明文、補足情報

### Background Colors
- **background-main**: `#f3f4f6` (gray-100) - ページ全体の背景
- **background-tag**: `#e5e7eb` (gray-200) - タグの背景
- **background-navbar**: `#1f2937` (gray-800) - ナビゲーションバーの背景

## 使用方法

Tailwindクラスとして直接使用：

```jsx
// テキスト色
<h1 className="text-primary">見出し</h1>
<p className="text-secondary">本文</p>

// 背景色
<div className="bg-background-main">メイン背景</div>
<div className="bg-background-tag">タグ背景</div>
<nav className="bg-background-navbar">ナビゲーション</nav>

// ホバー状態
<a className="text-primary hover:text-secondary">リンク</a>
```

## その他の標準色
- **text-white**: ダーク背景上のテキスト

## 使用ルール

1. **統一性**: 同じ目的の要素には同じ色を使用する
2. **階層性**: テキストの重要度に応じて色を使い分ける
3. **アクセシビリティ**: 背景とテキストのコントラスト比を確保する