import Card from "@/components/card"

export default function Product() {
    return (
      <div className="p-8 text-amber-600 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Product</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <Card image="" url="/blog/20240826" title="YouTube分析" discription="YouTubeの視聴履歴のJSONファイルから、最もよく出てくる単語100個をランキング形式で表示します" tag={["YouTube", "Python", "JSON"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
          <Card image="" url="" title="サンプル" discription="サンプル" tag={["サンプル"]} />
        </div>
      </div>
    )
  }
  