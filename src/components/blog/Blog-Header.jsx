import { Badge } from "@/components/ui/badge"

export default function BlogHeader() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-3 md:mb-4 bg-red-600 text-white hover:bg-red-700 text-xs md:text-sm">
            YouTube Insights Blog
          </Badge>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            Latest YouTube Analytics & Creator Insights
          </h1>
          <p className="text-sm md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Stay updated with the latest trends, earnings analysis, and growth strategies from top YouTube creators
            worldwide.
          </p>
        </div>
      </div>
    </div>
  )
}
