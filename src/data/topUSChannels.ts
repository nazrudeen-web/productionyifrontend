export const topChannelsList = [
  { handle: "@mrbeast", slug: "mrbeast-net-worth"},
  { handle: "@cocomelon", slug: "cocomelon-net-worth"},
  { handle: "@vladandniki", slug: "vladandniki-net-worth"},
  { handle: "@kidsdianashow", slug: "kidsdianashow-net-worth"},
  { handle: "@likenastyaofficial", slug: "likenastyaofficial-net-worth"},
  { handle: "@stokestwins", slug: "stokestwins-net-worth"},
  { handle: "@wwe", slug: "wwe-net-worth" },
  { handle: "@alanchikinchow", slug: "alanchikinchow-net-worth" },
  { handle: "@a4a4a4a4", slug: "a4a4a4a4-net-worth" },
  { handle: "@pinkfong", slug: "pinkfong-net-worth" },
];

export async function fetchUSChannels() {
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
          };
        }

        const json = await res.json();
        return {
          name: json.title || ch.handle,
          slug: ch.slug,
          ...json, // include full data
        };
      } catch (e) {
        return {
          name: ch.handle,
          slug: ch.slug,
        };
      }
    })
  );

  return results;
}
