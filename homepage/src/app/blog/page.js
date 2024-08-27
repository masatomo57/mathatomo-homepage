import Card from "@/components/card"

export default function Blog() {
    return (
      <div className="p-8 text-amber-600 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <Card img="" url="" title="YouTubeの視聴履歴から自分の好みを分析してみた" discription="2024/8/26" tag={["YouTube", "Python", "JSON"]} />
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
  