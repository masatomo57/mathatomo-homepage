import Link from "next/link"

export default function Profile() {
    return (
      <div className="p-8 bg-white text-amber-600 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">まさとも / Masatomo</h1>
        北海道大学大学院理学院数学専攻修士2年。微分トポロジーを中心に、シンプレクティック幾何学などを合わせて学んでいます。個人的にプログラミングもやっています。

        <ul>
          <li>　</li>
          <li className="font-bold">出身</li>
          <li>北海道小樽市</li>
          <li>　</li>
          <li className="font-bold">経歴</li>
          <li>北海道札幌手稲高等学校 → 北海道大学理学部数学科 → 北海道大学大学院理学院数学専攻 → ...</li>
          <li>　</li>
          <li className="font-bold">数学</li>
          <li>微分トポロジー / シンプレクティック・接触幾何 / シュタイン多様体 / Weinsteinハンドル / h同境定理</li>
          <li>　</li>
          <li className="font-bold">技術</li>
          <li>Python(Django, Flask, FastAPI...) / JavaScript(React, NextJS) / HTML&CSS / SQLite / Scala / C / GitHub / Figma / LaTeX</li>
          <li>　</li>
          <li className="font-bold">学生時代の課外活動</li>
          <li>
            <Link href="https://www.mathvis.org/" className="underline hover:text-sky-700">数学みえる化プロジェクト</Link> 会員（2020.3〜）
             / <Link href="https://codegym.jp/academy" className="underline hover:text-sky-700">CODEGYM Academy</Link> 4期生（2023.11~2024.3）
             / 某大学受験予備校 チューター （2019.4~2024.3）,
            その他ハッカソン参加等
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
    )
  }
  