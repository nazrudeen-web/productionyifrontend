export async function GET() {
  const base = "https://youtubersincome.com";

  const staticRoutes = ["/", "/blog", "/top-channels"];

  const blogSlugs = [
    "How-Much-Money-Do-YouTubers-Make-Per-1,000-Views-in-2025",
    "How-to-Grow-a-YouTube-Channel-from-Scratch-2025-Guide",
  ];

  const fallbackDynamicSlugs = [
    "mrbeast-net-worth",
    "tseries-net-worth",
    "cocomelon-net-worth",
    "sonyentertainmentindia-net-worth",
    "zeemusiccompany-net-worth",
    "blackpink-net-worth",
    "goldmines-net-worth",
    "likenastyaofficial-net-worth",
    "kidsdianashow-net-worth",
    "vladandniki-net-worth",
  ];

  let dynamicFromKV: string[] = [];

  try {
    const res = await fetch("https://api.youtubersincome.com/sitemap-keys");
    if (res.ok) {
      const handles: string[] = await res.json();

      const fetches = handles.map(async (handle) => {
        try {
          const kvRes = await fetch(
            `https://api.youtubersincome.com/kv?handle=${handle}`
          );
          if (!kvRes.ok) return null;
          const data = await kvRes.json();
          if (data.viewCount && data.viewCount > 100 && data.handle) {
            return `${data.handle.replace(/^@/, "")}-net-worth`;
          }
        } catch {
          return null;
        }
        return null;
      });

      const results = await Promise.all(fetches);
      dynamicFromKV = results.filter((slug): slug is string => !!slug);
    } else {
      dynamicFromKV = fallbackDynamicSlugs;
    }
  } catch (err) {
    console.error("Failed to fetch dynamic data from KV:", err);
    dynamicFromKV = fallbackDynamicSlugs;
  }

  const urls = [
    ...staticRoutes.map((path) => `<url><loc>${base}${path}</loc></url>`),
    ...blogSlugs.map((slug) => `<url><loc>${base}/blog/${slug}</loc></url>`),
    ...dynamicFromKV.map((slug) => `<url><loc>${base}/${slug}</loc></url>`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
