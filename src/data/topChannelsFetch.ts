export const topChannelsList = [
  { handle: "@kidsdianashow", slug: "kidsdianashow-net-worth", rank: 1 },
  { handle: "@cocomelon", slug: "cocomelon-net-worth", rank: 2 },
  { handle: "@mrbeast", slug: "mrbeast-net-worth", rank: 3 },
  { handle: "@tseries", slug: "tseries-net-worth", rank: 4 },
  { handle: "@setindia", slug: "setindia-net-worth", rank: 5 },
  {
    handle: "@likenastyaofficial",
    slug: "likenastyaofficial-net-worth",
    rank: 6,
  },
  { handle: "@pewdiepie", slug: "pewdiepie-net-worth", rank: 7 },
  { handle: "@vladandniki", slug: "vladandniki-net-worth", rank: 8 },
  { handle: "@zeemusiccompany", slug: "zeemusiccompany-net-worth", rank: 9 },
  { handle: "@blackpink", slug: "blackpink-net-worth", rank: 10 },
];

export async function fetchTopChannels() {
  const results = await Promise.all(
    topChannelsList.map(async (ch) => {
      try {
        const res = await fetch(
          `https://api.youtubersincome.com/kv?handle=${ch.handle}`
        );

        if (!res.ok) {
          return {
            name: ch.handle,
            slug: ch.slug,
            rank: ch.rank,
          };
        }

        const json = await res.json();
        return {
          name: json.title || ch.handle,
          slug: ch.slug,
          rank: ch.rank,
          ...json, // include full data
        };
      } catch (e) {
        return {
          name: ch.handle,
          slug: ch.slug,
          rank: ch.rank,
        };
      }
    })
  );

  return results;
}
