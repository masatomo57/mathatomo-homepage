import Image from 'next/image'
import Link from 'next/link'

/* https://zenn.dev/knaka0209/books/9e86ccb888758c/viewer/61072a */

export default function Card({ image, url, title, discription, tag=[] }) {
  return (
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 rounded overflow-hidden shadow-lg">
        <Image src={image} alt />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><Link href={url}>{title}</Link></div>
        <p className="text-gray-700 text-base">
            {discription}
        </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tag?.map(item => (
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>
          ))}
        </div>
    </div>
  )
}
