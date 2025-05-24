import Link from "next/link"
import { MdOutlinePlace } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { LuWaypoints, LuActivity } from "react-icons/lu";
import { BiMath } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";

export default function Profile() {
    return (
      <div className="p-8 text-amber-600 min-h-full bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">まさとも / Masatomo</h1>
        <div className="text-black">
            
            <ul>
            <li>　</li>
            <li className="font-bold flex items-center gap-1"><MdOutlinePlace />出身</li>
            <li>北海道小樽市</li>
            <li>　</li>
            <li className="font-bold flex items-center gap-1"><LuWaypoints />経歴</li>
            <li>北海道札幌手稲高等学校 → 北海道大学理学部数学科 → 北海道大学大学院理学院数学専攻 → 東京の会社でITエンジニア</li>
            <li>　</li>
            <li className="font-bold flex items-center gap-1"><FaLaptopCode />エンジニアリング</li>
            <li>Webが好き</li>
            <li>Go(echo) / JSTS(React, Next, Vue) / Python / GitHub / AWS ...etc</li>
            <li>　</li>
            <li className="font-bold flex items-center gap-1"><BiMath />数学</li>
            <li>微分トポロジー / シンプレクティック・接触幾何 / Weinsteinハンドル / h同境定理 / Kaliman modification</li>
            <li>　</li>
            <li className="font-bold flex items-center gap-1"><LuActivity />活動</li>
            <li>
                <Link href="https://www.mathvis.org/" className="underline hover:text-sky-700">数学みえる化プロジェクト</Link> 会員（2020.3〜）
            </li>
            <li>　</li>
            <li className="font-bold flex items-center gap-1"><GrFavorite />好きなもの</li>
            <li>サッカー / 音楽 / アニメ / 漫画 / 美術館 / 映画 / ディズニー / 小説 / お酒 / カレー / 担担麺 / ...</li>
            <li>　</li>
            </ul>
        </div>
      </div>
    )
  }
