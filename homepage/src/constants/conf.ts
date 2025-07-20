/**
 * アプリケーション全体で使用する設定定数
 */

// サイトのベースURL
export const BASE_URL = "https://mathsatomo57.com";

// サイト名
export const SITE_NAME = "まさとものWebsite";

// サイトの説明
export const SITE_DESCRIPTION = "まさとものWebsiteです";

/**
 * 完全なURLを生成する
 * @param path - パス（先頭のスラッシュ有り）
 * @returns 完全なURL
 */
export const createFullUrl = (path: string): string => {
  // パスが既に完全なURLの場合はそのまま返す
  if (path.startsWith('http')) {
    return path;
  }
  
  // パスの先頭にスラッシュがない場合は追加する
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // 完全なURLを返す
  return `${BASE_URL}${normalizedPath}`;
};
