import { Crown, ExternalLink } from "lucide-react";
import { fetchTopChannels } from "../data/topChannelsFetch";
import { getReadableTopics, formatNumber, formatUSD } from "../utils/helper.js";
const topChannels = (await fetchTopChannels()).slice(0, 5); // Only show top 5

export function TopChannelsReact() {
  return (
    <section id="top-channels" className="py-12 md:py-20 bg-slate-50/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Crown className="h-4 w-4 md:h-5 md:w-5 text-yellow-600" />
            <span className="text-xs md:text-sm font-medium text-yellow-600">
              TOP EARNERS
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Highest Earning YouTube Channels
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Discover which channels are making the most money and learn from
            their success
          </p>
        </div>

        <div className="max-w-5xl mx-auto shadow-xl border-1 bg-white rounded-xl border border-slate-200">
          <div className="p-0">
            <div className="divide-y divide-slate-100">
              {topChannels.map((channel, index) => (
                <a
                  key={channel.rank}
                  href={`/${channel.slug}`}
                  className="block hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between p-3 md:p-6">
                    <div className="flex items-center gap-3 md:gap-6 flex-1 min-w-0">
                      <div
                        className={`flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full font-bold text-xs md:text-sm ${
                          index === 0
                            ? "bg-yellow-500 text-white"
                            : index === 1
                            ? "bg-gray-400 text-white"
                            : index === 2
                            ? "bg-amber-600 text-white"
                            : "bg-red-600 text-white"
                        }`}
                      >
                        {channel.rank}
                      </div>

                      <div className="relative flex-shrink-0">
                        <img
                          src={channel.thumbnail || "/placeholder.svg"}
                          alt={`${channel.title} avatar`}
                          width={40}
                          height={40}
                          className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white shadow-md"
                        />
                        {index < 3 && (
                          <Crown className="absolute -top-1 -right-1 h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                          <h3 className="font-bold text-sm md:text-lg text-slate-900 truncate">
                            {channel.title}
                          </h3>
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-slate-400 flex-shrink-0" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <span className="text-xs sm:text-sm text-slate-500 hidden sm:inline">
                            {channel.handle}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center rounded-md border border-slate-200 px-2 py-0.5 text-xs font-medium text-slate-700 bg-white">
                              {getReadableTopics(channel.topicCategories)}
                            </span>
                            <span className="text-xs md:text-sm text-slate-500 hidden sm:inline">
                              {formatNumber(channel.subscriberCount)}{" "}
                              subscribers
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-slate-500 sm:hidden">
                          {formatNumber(channel.subscriberCount)} subscribers
                        </span>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="font-bold text-sm md:text-lg text-green-600">
                        {formatUSD(channel.monthlyIncome)}
                      </div>
                      <div className="text-xs md:text-sm text-slate-600">
                        per month
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-6 md:mt-8">
          <a
            href="/top-youtube-channels"
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-200 text-sm md:text-base"
          >
            View All Top Channels
            <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
