import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Card from "@/components/card"

export default function Blog() {
    // postsディレクトリからファイル名を取得
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    // 各Markdownファイルからメタデータを取得し、Cardコンポーネントのリストを生成
    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data: frontMatter } = matter(fileContents);
      const slug = filename.replace('.md', '');

      return {
        title: frontMatter.title,
        date: frontMatter.date,
        tag: frontMatter.tag || [],
        slug: slug,
      };
    });

    // 日付でソート（新しい順）
    posts.sort((a, b) => b.date - a.date);

    return (
      <div className="p-8 text-amber-600 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post) => (
              <Card
                key={post.slug}
                image=""
                url={`/blog/${post.slug}`}
                title={post.title}
                discription={post.date}
                tag={post.tag}
              />
          ))}
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
        </div>
      </div>
    )
  }
  