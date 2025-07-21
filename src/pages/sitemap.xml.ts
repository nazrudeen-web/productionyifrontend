export async function GET() {
  const base = "https://youtubersincome.com";

  const staticRoutes = [
    "/",
    "/about",
    "/privacy-policy",
    "/blog",
    "/top-youtube-channels",
  ];
  const blogSlugs = [
    "How-Much-Money-Do-YouTubers-Make-Per-1,000-Views-in-2025",
    "How-to-Grow-a-YouTube-Channel-from-Scratch-2025-Guide",
    "best-youtube-niches-2025",
    "youtube-cpm-vs-rpm-2025",
  ];
  const countrySlugs = [
    "united-states",
    "canada",
    "united-kingdom",
    "australia",
    "germany",
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

  let dynamicFromKV = [];

  try {
    const res = await fetch("https://api.youtubersincome.com/sitemap-keys");
    if (res.ok) {
      const handles = await res.json();
      dynamicFromKV = handles.map((handle) => `${handle}-net-worth`);
    } else {
      dynamicFromKV = fallbackDynamicSlugs;
    }
  } catch {
    dynamicFromKV = fallbackDynamicSlugs;
  }

  const urls = [
    ...staticRoutes.map((path) => `<url><loc>${base}${path}</loc></url>`),
    ...blogSlugs.map((slug) => `<url><loc>${base}/blog/${slug}</loc></url>`),
    ...countrySlugs.map(
      (slug) => `<url><loc>${base}/top-youtube-channels/${slug}</loc></url>`
    ),
    ...dynamicFromKV.map((slug) => `<url><loc>${base}/${slug}</loc></url>`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
