import Link from "next/link"
import { MdOutlinePlace } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { LuWaypoints, LuActivity } from "react-icons/lu";
import { BiMath } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { Metadata } from 'next';
import ImageClip from "@/components/ImageClip";
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Profile",
  description: "まさとものWebsiteのProfleです．経歴や活動内容，趣味を紹介しています．",
  openGraph: {
    title: "Profile | まさとものWebsite",
    description: "まさとものWebsiteのProfleです．経歴や活動内容，趣味を紹介しています．",
    url: "/profile",
    type: "profile",
    images: [
      {
        url: "/og_default.jpg",
        width: 800,
        height: 600,
        alt: "まさともの写真",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profile | まさとものWebsite",
    description: "まさとものWebsiteのProfleです．経歴や活動内容，趣味を紹介しています．",
    images: ["/og_default.jpg"],
  },
};

export default function Profile() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "まさとも",
      "alternateName": "Masatomo",
      "url": "https://mathsatomo57.com/profile",
      "description": "ITエンジニア．北海道大学理学部数学科卒業、同大学院理学院数学専攻修了，微分トポロジー専攻．Go, TypeScript, などを使用したソフトウェア開発に従事．趣味でHaskellやを学習中．",
      "jobTitle": "ITエンジニア",
      "birthPlace": {
        "@type": "Place",
        "name": "北海道小樽市"
      },
      "alumniOf": [
        {
          "@type": "HighSchool",
          "name": "北海道札幌手稲高等学校"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "北海道大学理学部数学科"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "北海道大学大学院理学院数学専攻"
        }
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
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "数学みえる化プロジェクト",
        "url": "https://www.mathvis.org/"
      },
      "interestIn": [
        "サッカー",
        "音楽",
        "アニメ",
        "漫画",
        "美術館",
        "映画",
        "ディズニー",
        "小説",
        "お酒",
        "カレー",
        "担担麺"
      ]
    };

    return (
      <>
        <JsonLd data={jsonLd} />
        <div className="p-8 text-primary min-h-full bg-background-main">
          <h1 className="text-3xl font-bold mb-4">まさとも / Masatomo</h1>
          <div className="text-secondary">
            <ul>
              <li>　</li>
              <li className="font-bold flex items-center gap-1"><MdOutlinePlace />出身</li>
              <li>北海道小樽市</li>
              <li>　</li>
              <li className="font-bold flex items-center gap-1"><LuWaypoints />経歴</li>
              <li>北海道札幌手稲高等学校 → 北海道大学理学部数学科 → 北海道大学大学院理学院数学専攻 → 東京の会社でITエンジニア</li>
              <li>　</li>
              <li className="font-bold flex items-center gap-1"><FaLaptopCode />エンジニアリング</li>
              <li>Go(echo) / JSTS(React, Next, Vue) / Haskell / Scala / Python / C</li>
              <li>　</li>
              <li className="font-bold flex items-center gap-1"><BiMath />数学</li>
              <li>微分トポロジー / シンプレクティック・接触幾何 / Weinsteinハンドル / h同境定理 / Kaliman modification / 圏論</li>
              <li>　</li>
              <li className="font-bold flex items-center gap-1"><LuActivity />活動</li>
              <li>
                  <Link href="https://www.mathvis.org/" className="underline hover:text-primary">数学みえる化プロジェクト</Link> 会員（2020.3〜）
              </li>
              <li>　</li>
              <li className="font-bold flex items-center gap-1"><GrFavorite />好きなもの</li>
              <li>サッカー / 音楽 / アニメ / 漫画 / 美術館 / 映画 / ディズニー / 小説 / お酒 / カレー / 担担麺 / ...</li>
              <li>　</li>
            </ul>
          </div>
          <div className="my-6">
            <ImageClip src="/masatomo_1.jpeg" alt="まさとも" shape="rounded" size={240} caption="2025/02/08 角島大橋にて" />
          </div>
        </div>
      </>
    )
  }
