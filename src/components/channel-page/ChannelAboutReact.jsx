import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function ChannelAbout({ data }) {
  const publishedDate = new Date(data.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const topics =
    data.topicCategories?.map((url) => {
      const name = url.split("/").pop()?.replace(/_/g, " ") || "";
      return decodeURIComponent(name);
    }) || [];

  const readableTopics =
    topics.length > 1
      ? topics.slice(0, -1).join(", ") + " & " + topics.slice(-1)
      : topics[0] || "Creator";

  const countryName = new Intl.DisplayNames(["en"], { type: "region" }).of(
    data.country
  );

  const formatNumber = (n) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1,
    }).format(n);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5" />
          About {data.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          <strong>{data.title}</strong> is a prominent YouTube channel
          specializing in <strong>{readableTopics}</strong> content. Since
          launching on <strong>{publishedDate}</strong>, the channel has built
          an impressive following of{" "}
          <strong>{formatNumber(data.subscriberCount)} subscribers</strong> and
          accumulated{" "}
          <strong>{formatNumber(data.viewCount)} total views</strong> across{" "}
          <strong>{data.videoCount} videos</strong>.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Based in <strong>{countryName}</strong>, this channel has established
          itself as a significant presence in the YouTube ecosystem,
          consistently delivering engaging content that resonates with audiences
          worldwide. The channel's success demonstrates the power of quality
          content creation and audience engagement.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg bg-slate-50 p-4 md:grid-cols-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">
              {formatNumber(data.subscriberCount)}
            </p>
            <p className="text-sm text-slate-600">Subscribers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">
              {formatNumber(data.viewCount)}
            </p>
            <p className="text-sm text-slate-600">Total Views</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">
              {data.videoCount}
            </p>
            <p className="text-sm text-slate-600">Videos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">
              {new Date().getFullYear() -
                new Date(data.publishedAt).getFullYear()}
            </p>
            <p className="text-sm text-slate-600">Years Active</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
