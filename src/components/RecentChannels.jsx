import { Clock, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { getReadableTopics, formatNumber, formatUSD } from "../utils/helper.js";

const KEYS_API = "https://api.youtubersincome.com/sitemap-keys-all";
const CHANNEL_API = "https://api.youtubersincome.com/kv?handle=";

export default function RecentChannels() {
  const [channels, setChannels] = useState([]);
  console.log(channels);

  useEffect(() => {
    (async () => {
      try {
        const keysRes = await fetch(KEYS_API);
        const keys = await keysRes.json();

        const fetches = keys.map(async (key) => {
          try {
            const res = await fetch(`${CHANNEL_API}${encodeURIComponent(key)}`);
            const data = await res.json();
            return data?.subscriberCount > 500000 ? data : null;
          } catch {
            return null;
          }
        });

        const results = (await Promise.all(fetches)).filter(Boolean);
        const selected = results.sort(() => 0.5 - Math.random()).slice(0, 5);
        setChannels(selected);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (!channels.length) {
    return (
      <p className="text-center py-16 text-gray-500">
        Loading trending channels...
      </p>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
            <span className="text-xs sm:text-sm font-medium text-green-600">
              RECENTLY ANALYZED
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 px-4">
            Latest Channel Analytics
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Explore detailed analytics and income estimates for the most
            successful YouTube creators across different niches
          </p>
        </div>

        <div className="max-w-5xl mx-auto shadow-xl bg-white rounded-xl border border-slate-200">
          <div className="p-0">
            <div className="divide-y divide-slate-100">
              {channels.map((channel, index) => (
                <a
                  key={index}
                  href={`/${channel.handle.replace(/^@/, "")}-net-worth`}
                  className="block hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between p-3 sm:p-4 md:p-6">
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-1 min-w-0">
                      <div className="relative flex-shrink-0">
                        <img
                          src={channel.thumbnail || "/placeholder.svg"}
                          alt={`${channel.title} avatar`}
                          width={40}
                          height={40}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white shadow-md"
                        />
                        {true && (
                          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1">
                          <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-900 truncate">
                            {channel.title}
                          </h3>
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 flex-shrink-0" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <span className="text-xs sm:text-sm text-slate-500 hidden sm:inline">
                            {channel.handle}
                          </span>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="inline-flex items-center justify-center rounded-md border border-slate-200 px-1.5 py-0.5 text-xs font-medium text-slate-700 bg-white">
                              {getReadableTopics(channel.topicCategories)}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-500 hidden sm:inline">
                              {formatNumber(channel.subscriberCount)}{" "}
                              subscribers
                            </span>
                          </div>
                        </div>
                        <div className="sm:hidden mt-1">
                          <span className="text-xs text-slate-500">
                            {formatNumber(channel.subscriberCount)} subscribers
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="font-bold text-sm sm:text-base md:text-lg text-green-600">
                        {formatUSD(channel.monthlyIncome)}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">
                        per month
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <a
            href="/top-youtube-channels"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base"
          >
            View All Recent Channels
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
