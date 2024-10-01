import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Card from "@/components/card/card"

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
        date: frontMatter.date,
        tag: frontMatter.tag || [],
        id: id,
      };
    }).reverse();

    return (
      <div className="p-8 text-amber-600 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post) => (
              <Card
                key={post.id}
                image=""
                url={`/blog/${post.id}`}
                title={post.title}
                discription={post.date}
                tag={post.tag}
              />
          ))}
        </div>
      </div>
    )
  }
  