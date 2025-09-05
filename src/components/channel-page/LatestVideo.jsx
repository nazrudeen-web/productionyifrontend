import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function LatestVideos({ data }) {
  const uploadsPlaylistId = "UU" + data.id.slice(2);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="h-5 w-5" />
          Latest Videos from {data.title}
        </CardTitle>
        <p className="text-sm text-slate-600">
          Watch the newest videos uploaded by <strong>{data.title}</strong>.
          Stay up-to-date with their latest content and trending topics.
        </p>
      </CardHeader>
      <CardContent>
        <div
          className="relative w-full overflow-hidden rounded-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${uploadsPlaylistId}`}
            title={`Latest videos playlist of ${data.title}`}
            className="absolute top-0 left-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </CardContent>
    </Card>
  );
}
