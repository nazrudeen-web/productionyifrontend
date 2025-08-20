import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users } from "lucide-react";

export default function TopChannelsHeader() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-3 md:mb-4 bg-red-600 text-white hover:bg-red-700 text-xs md:text-sm"
          >
            <TrendingUp className="w-3 h-3 mr-1" />
            Top YouTube Channels
          </Badge>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            Discover the World's Most Successful YouTube Channels
          </h1>
          <p className="text-sm md:text-xl text-slate-300 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            Explore top-performing YouTube channels from around the globe,
            analyze their earnings, and discover what makes them successful.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
              <span>195+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
              <span>10,000+ Channels</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
              <span>Real-time Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
