import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

export default async function BlogPost({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound(); // ファイルが存在しない場合は404エラー
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContent);

  // Markdown を HTML に変換
  const contentHtml = marked(content);

  return (
    <div className="p-8 text-amber-600 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-gray-600">{frontMatter.date}</p>
      <div className="px-6 pt-4 pb-2">
          {frontMatter.tag?.map(item => (
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>
          ))}
      </div>
      <div className="prose mt-4">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}
