import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Card from "@/components/card/card"
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { BASE_URL, SITE_NAME } from '@/constants/conf';

export const metadata: Metadata = {
  title: "Blog",
  description: "まさとものWebsiteのBlogです．日々の出来事や勉強したことを書いた記事の一覧ページです．",
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description: "まさとものWebsiteのBlogです．日々の出来事や勉強したことを書いた記事の一覧ページです．",
    url: "/blog",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og_default.jpg`,
        width: 800,
        height: 600,
        alt: "まさとものブログ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${SITE_NAME}`,
    description: "まさとものWebsiteのBlogです．日々の出来事や勉強したことを書いた記事の一覧ページです．",
    images: [`${BASE_URL}/og_default.jpg`],
  },
};

export default function Blog() {
    // postsディレクトリからファイル名を取得
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    // 各Markdownファイルからメタデータを取得し、Cardコンポーネントのリストを生成
    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data: frontMatter } = matter(fileContents);
      const id = filename.replace('.md', '');

      return {
        title: frontMatter.title,
        datePublished: frontMatter.datePublished,
        dateModified: frontMatter.dateModified || frontMatter.datePublished,
        tag: frontMatter.tag || [],
        description: frontMatter.description || `${frontMatter.title}に関する記事です`,
        id: id,
      };
    }).reverse();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "masatomo's Blog",
      "description": "まさとものWebsiteのBlogです．日々の出来事や勉強したことを書いた記事の一覧ページです．",
      "url": "https://mathsatomo57.com/blog",
      "author": {
        "@type": "Person",
        "name": "masatomo"
      },
      "publisher": {
        "@type": "Person",
        "name": "masatomo",
        "url": "https://mathsatomo57.com"
      },
      "blogPost": posts.map((post) => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "datePublished": post.datePublished,
        "dateModified": post.dateModified,
        "keywords": post.tag,
        "url": `https://mathsatomo57.com/blog/${post.id}`,
        "author": {
          "@type": "Person",
          "name": "masatomo"
        }
      }))
    };

    return (
      <>
        <JsonLd data={jsonLd} />
        <div className="p-8 text-primary min-h-full bg-background-main">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <div className="flex flex-wrap justify-center gap-6">
            {posts.map((post) => (
                <Card
                  key={post.id}
                  url={`/blog/${post.id}`}
                  title={post.title}
                  date={post.datePublished}
                  tag={post.tag}
                />
            ))}
          </div>
        </div>
      </>
    )
  }
