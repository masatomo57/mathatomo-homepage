import Card from "@/components/card/card"

export default function Product() {
    return (
      <div className="p-8 text-primary min-h-full bg-background-main">
        <h1 className="text-3xl font-bold mb-4">Product</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <Card image="" url="/" title="このサイト" discription="自己紹介とブログのサイトです．絶賛開発&改修中．余裕ができたらブログに開発の話も書こうと思います．" tag={["Next.js"]} />
          <Card image="" url="/blog/20240826" title="YouTube分析" discription="YouTubeの視聴履歴のJSONファイルから，最もよく出てくる単語100個をランキング形式で表示します" tag={["YouTube", "Python", "JSON"]} />
          <Card image="" url="https://search-a-game-34s3ju7oo-masatomo57.vercel.app/" title="あをつかまえるげーむ" discription="React学びたての時に作ったげーむです．お粗末な出来ですが気に入っています．" tag={["React"]} />
          <Card image="" url="https://masatomo57.github.io/JS-sample-thread.io/" title="JavaScriptエンジンとスレッドのデモ" discription="JavaScriptのスレッドや非同期処理の理解のために作りました" tag={["JavaScript", "web"]} />
        </div>
      </div>
    )
  }
  