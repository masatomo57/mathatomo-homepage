import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'posts', `${id}.md`);
  
  if (!fs.existsSync(filePath)) {
    return {
      title: '記事が見つかりません',
    };
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter } = matter(fileContent);
  
  return {
    title: `${frontMatter.title} - Blog`,
    description: frontMatter.description || `${frontMatter.title}に関する記事です`,
  };
}

export default async function BlogPost({ params }: Props) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'posts', `${id}.md`);

  if (!fs.existsSync(filePath)) {
    notFound(); // ファイルが存在しない場合は404エラー
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContent);

  return (
    <div className="p-8 text-primary min-h-full bg-background-main">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-secondary">{frontMatter.date}</p>
      <div className="px-6 pt-4 pb-2">
          {frontMatter.tag?.map((item: string, index: number) => (
              <span key={index} className="inline-block bg-background-tag rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2">
                {item}
              </span>
          ))}
      </div>
      <div className="px-0 md:px-10 pt-4 pb-2">
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
