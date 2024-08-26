import Card from "@/components/card"

export default function Product() {
    return (
      <div className="p-8 bg-white text-amber-600 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Product</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <Card img="" url="" title="YouTube分析" discription="YouTubeの視聴履歴のJSONファイルから、最もよく出てくる単語100個をランキング形式で表示します" tag={["YouTube", "Python", "JSON"]} />
          <Card img="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card img="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card img="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card img="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card img="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card img="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card img="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card img="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
        </div>
      </div>
    )
  }
  