export async function GET() {
  const base = "https://youtubersincome.com";

  // ✅ Static important pages
  const staticRoutes = [
    "/",
    "/about",
    "/calculator",
    "/privacy-policy",
    "/blog",
    "/top-youtube-channels",
  ];

  // ✅ Blog pages (high quality)
  const blogSlugs = [
    "how-much-money-do-youtubers-make-per-1000-views-in-2025",
    "how-to-grow-a-youtube-channel-from-scratch-2025-guide",
    "best-youtube-niches-2025",
    "youtube-cpm-vs-rpm-2025",
  ];

  // ✅ Country pages
  const countrySlugs = [
    "united-states",
    "canada",
    "united-kingdom",
    "australia",
    "germany",
  ];

  // ✅ ONLY TOP NET WORTH PAGES (manual control)
  const topNetWorthPages = [
    "mrbeast-net-worth",
    "tseries-net-worth",
    "pewdiepie-net-worth",
    "cocomelon-net-worth",
    "setindia-net-worth",
    "zeemusiccompany-net-worth",
    "blackpink-net-worth",
    "goldmines-net-worth",
    "likenastyaofficial-net-worth",
    "vladandniki-net-worth",
  ];

  const urls = [
    ...staticRoutes.map(
      (path) => `<url><loc>${base}${path}</loc></url>`
    ),

    ...blogSlugs.map(
      (slug) => `<url><loc>${base}/blog/${slug}</loc></url>`
    ),

    ...countrySlugs.map(
      (slug) =>
        `<url><loc>${base}/top-youtube-channels/${slug}</loc></url>`
    ),

    ...topNetWorthPages.map(
      (slug) => `<url><loc>${base}/${slug}</loc></url>`
    ),
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
