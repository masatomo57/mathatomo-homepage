import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Metadata, ResolvingMetadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { BASE_URL, SITE_NAME } from '@/constants/conf';

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
  
  const description = frontMatter.description || `${frontMatter.title}に関する記事です`;
  const title = `${frontMatter.title} - Blog`;
  
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `/blog/${id}`,
      type: 'article',
      publishedTime: frontMatter.datePublished,
      modifiedTime: frontMatter.dateModified || frontMatter.datePublished,
      authors: ['まさとも'],
      tags: frontMatter.tag || [],
      images: [
        {
          url: `${BASE_URL}/og_default.jpg`,
          width: 800,
          height: 600,
          alt: frontMatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`${BASE_URL}/og_default.jpg`],
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": frontMatter.title,
    "description": frontMatter.description || `${frontMatter.title}に関する記事です`,
    "datePublished": frontMatter.datePublished,
    "dateModified": frontMatter.dateModified || frontMatter.datePublished,
    "keywords": frontMatter.tag || [],
    "author": {
      "@type": "Person",
      "name": "masatomo"
    },
    "publisher": {
      "@type": "Person",
      "name": "masatomo",
      "url": BASE_URL
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${id}`
    },
    "url": `${BASE_URL}/blog/${id}`
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="p-8 text-primary min-h-full bg-background-main">
        <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
        <p className="text-secondary">
          公開: {frontMatter.datePublished}
          {frontMatter.dateModified && frontMatter.dateModified !== (frontMatter.datePublished) && (
            <span> / 更新: {frontMatter.dateModified}</span>
          )}
        </p>
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
    </>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

  return files.map((filename) => ({
    id: filename.replace('.md', ''),
  }));
}
