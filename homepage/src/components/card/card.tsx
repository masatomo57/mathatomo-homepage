import Link from 'next/link'

/* https://zenn.dev/knaka0209/books/9e86ccb888758c/viewer/61072a */

interface CardProps {
  url: string;
  title: string;
  date: string;
  tag?: string[];
}

export default function Card( { url, title, date, tag = [] }: CardProps) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 min-h-[3.5rem]">
          <Link href={url}>{title}</Link>
        </div>
        <p className="text-secondary text-base">
            {date}
        </p>
        </div>
        <div className="px-6 pt-0 pb-2">
          {tag?.map((item, index) => (
              <span key={index} className="inline-block bg-background-tag rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2">{item}</span>
          ))}
        </div>
    </div>
  )
}
