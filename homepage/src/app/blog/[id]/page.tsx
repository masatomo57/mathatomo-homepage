import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default async function BlogPost({ params }: { params: { id: string } }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'posts', `${id}.md`);

  if (!fs.existsSync(filePath)) {
    notFound(); // ファイルが存在しない場合は404エラー
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContent);

  return (
    <div className="p-8 text-amber-600 min-h-full bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-gray-600">{frontMatter.date}</p>
      <div className="px-6 pt-4 pb-2">
          {frontMatter.tag?.map((item: string, index: number) => (
              <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item}
              </span>
          ))}
      </div>
      <div className="px-10 pt-4 pb-2">
        <article className="prose mt-4 !max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

  return files.map((filename) => ({
    id: filename.replace('.md', ''),
  }));
}
