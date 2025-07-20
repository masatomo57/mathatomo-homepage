import Link from 'next/link';
import { FaXTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa6';
import ImageClip from '../components/ImageClip';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  description: "まさとものWebsiteのHomeです．各種SNSへのリンクを掲載しています．",
  openGraph: {
    title: "まさとものWebsite",
    description: "まさとものWebsiteのHomeです．各種SNSへのリンクを掲載しています．",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og_default.jpg",
        width: 800,
        height: 600,
        alt: "まさとものアイコン",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "まさとものWebsite",
    description: "まさとものWebsiteのHomeです．各種SNSへのリンクを掲載しています．",
    images: ["/og_default.jpg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "まさとも",
    "alternateName": "Masatomo, masatomo57, mathatomo, mathatomo57, mathsatomo, mathsatomo57, マサトモ",
    "url": "https://mathsatomo57.com",
    "description": "まさとものWebsite",
    "jobTitle": "ITエンジニア",
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "北海道大学"
      }
    ],
    "sameAs": [
      "https://x.com/mathatomo57",
      "https://www.instagram.com/mathatomo57",
      "https://www.facebook.com/share/19i7QWpB64/",
      "https://www.linkedin.com/in/%E6%AD%A3%E6%9C%8B-%E8%B5%A4%E5%B7%9D-4485b2311/",
      "https://github.com/masatomo57"
    ],
    "knowsAbout": [
        "プログラミング",
        "ソフトウェア開発",
        "Go",
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Vue",
        "Haskell",
        "Scala",
        "Python",
        "微分トポロジー",
        "シンプレクティック・接触幾何",
        "Weinsteinハンドル",
        "h同境定理",
        "Kaliman modification",
        "圏論",
        "数学"
    ]
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="flex flex-col justify-center items-center h-full bg-background-main text-primary">
        <div className="my-6">
          <ImageClip src="/masatomo_2.jpeg" alt="まさともと宮島の鹿" shape="circle" size={240} />
        </div>
        <h1 className="text-4xl font-bold">Welcome to まさとも&apos;s Website!</h1>
        <div className="flex flex-row text-center mt-4 gap-4">
          <Link href="https://x.com/mathatomo57" className="underline hover:text-secondary flex items-center">
            <FaXTwitter size={32} className="swing-hover" />
          </Link>
          <Link href="https://www.instagram.com/mathatomo57?igsh=MTFvY2Y2Ym53N250aw%3D%3D&utm_source=qr" className="underline hover:text-secondary flex items-center">
            <FaInstagram size={32} className="swing-hover" />
          </Link>
          <Link href="https://www.facebook.com/share/19i7QWpB64/?mibextid=wwXIfr" className="underline hover:text-secondary flex items-center">
            <FaFacebook size={32} className="swing-hover" />
          </Link>
          <Link href="https://www.linkedin.com/in/%E6%AD%A3%E6%9C%8B-%E8%B5%A4%E5%B7%9D-4485b2311/" className="underline hover:text-secondary flex items-center">
            <FaLinkedin size={32} className="swing-hover" />
          </Link>
          <Link href="https://github.com/masatomo57" className="underline hover:text-secondary flex items-center">
            <FaGithub size={32} className="swing-hover" />
          </Link>
        </div>
      </div>
    </>
  );
}
