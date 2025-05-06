import Card from "@/components/card/card"

export default function Product() {
    return (
      <div className="p-8 text-amber-600 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Product</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <Card image="" url="/" title="このサイト" discription="自己紹介とブログのサイトです。絶賛開発&改修中。余裕ができたらブログに開発の話も書こうと思います。" tag={["Next.js"]} />
          <Card image="" url="/blog/20240826" title="YouTube分析" discription="YouTubeの視聴履歴のJSONファイルから、最もよく出てくる単語100個をランキング形式で表示します" tag={["YouTube", "Python", "JSON"]} />
        </div>
      </div>
    )
  }
  