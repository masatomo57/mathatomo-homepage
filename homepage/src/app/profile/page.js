import Link from "next/link"

export default function Profile() {
    return (
      <div className="p-8 text-amber-600 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">まさとも / Masatomo</h1>
        <div className="text-black">
            
            <ul>
            <li>　</li>
            <li className="font-bold">出身</li>
            <li>北海道小樽市</li>
            <li>　</li>
            <li className="font-bold">経歴</li>
            <li>北海道札幌手稲高等学校 → 北海道大学理学部数学科 → 北海道大学大学院理学院数学専攻 → 東京の会社でITエンジニア</li>
            <li>　</li>
            <li className="font-bold">好きな数学</li>
            <li>微分トポロジー / シンプレクティック・接触幾何 / Weinsteinハンドル / h同境定理 / Kaliman modification</li>
            <li>　</li>
            <li className="font-bold">技術</li>
            <li>Python(Django, Flask, FastAPI...) / JavaScript(React, Next.js) / HTML&CSS / SQLite / LaTeX  / GitHub / Figma / Scala / C / Go</li>
            <li>　</li>
            <li className="font-bold">その他活動</li>
            <li>
                <Link href="https://www.mathvis.org/" className="underline hover:text-sky-700">数学みえる化プロジェクト</Link> 会員（2020.3〜）
            </li>
            <li>　</li>
            <li className="font-bold">資格</li>
            <li>英語検定2級 / 数学検定2級 / 基本情報技術者 / 普通自動車免許</li>
            <li>　</li>
            <li className="font-bold">好きなもの</li>
            <li>サッカー（北海道コンサドーレ札幌, AC Milan）/ 音楽 / アニメ / 漫画 / 美術館 / 映画 / ディズニー / お酒 / カレー / 担担麺 / ...</li>
            <li>　</li>
            </ul>
        </div>
      </div>
    )
  }
  