"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, DollarSign } from "lucide-react";
import { formatNumber } from "@/utils/helper"; // ✅ assuming you already use this

const KEYS_API = "https://api.youtubersincome.com/sitemap-keys";
const CHANNEL_API = "https://api.youtubersincome.com/kv?handle=";

export default function RelatedChannel({ data }) {
  const [relatedChannels, setRelatedChannels] = useState([]);

  useEffect(() => {
    async function fetchChannels() {
      try {
        const keysRes = await fetch(KEYS_API);
        const allHandles = await keysRes.json();

        const results = await Promise.all(
          allHandles.slice(0, 200).map(async (h) => {
            try {
              const res = await fetch(`${CHANNEL_API}@${h}`);
              return await res.json();
            } catch {
              return null;
            }
          })
        );

        // Filter channels by matching topicCategories
        const sameCategory = results.filter(
          (ch) =>
            ch &&
            ch.topicCategories &&
            data.topicCategories &&
            ch.topicCategories.some((cat) => data.topicCategories.includes(cat))
        );

        // Pick only 5
        setRelatedChannels(sameCategory.slice(0, 5));
      } catch (err) {
        console.error("Error fetching related channels:", err);
      }
    }

    if (data && data.topicCategories?.length) {
      fetchChannels();
    }
  }, [data]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          <Users className="h-5 w-5" />
          Explore More Channels
        </CardTitle>
        <p className="text-sm text-slate-600">
          Discover other creators with similar content
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          {relatedChannels.map((channel, index) => (
            <a
              key={index}
              href={`/${channel.handle.replace(/^@/, "")}-net-worth`}
              className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50"
            >
              {/* Thumbnail */}
              <img
                src={channel.thumbnail || "/generic-youtuber-profile.png"}
                alt={`${channel.title} profile`}
                className="h-12 w-12 rounded-full object-cover"
              />

              {/* Channel Info */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 truncate">
                  {channel.title}
                </p>

                <div className="flex flex-wrap items-center gap-x-3 text-xs text-slate-500">
                  {/* Country */}
                  <span>{channel.country || "Unknown"}</span>

                  {/* Monthly Income */}
                  {channel.monthlyIncome && (
                    <span className="flex items-center gap-1 text-green-600">
                      <DollarSign className="h-3 w-3" />$
                      {formatNumber(channel.monthlyIncome)}/mo
                    </span>
                  )}

                  {/* Yearly Income */}
                  {channel.yearlyIncome && (
                    <span className="text-slate-400">
                      ~${formatNumber(channel.yearlyIncome)}/yr
                    </span>
                  )}
                </div>
              </div>

              <ArrowRight className="h-4 w-4 text-slate-400 shrink-0" />
            </a>
          ))}
        </div>

        <Button asChild className="w-full bg-transparent" variant="outline">
          <a href="/top-youtube-channels">
            View All Top Channels
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
