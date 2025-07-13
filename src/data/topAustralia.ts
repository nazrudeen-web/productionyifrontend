export const topChannelsList = [
 { handle: "@bouncepatrol", slug: "bouncepatrol-net-worth" },
  { handle: "@chloeting", slug: "chloeting-net-worth" },
  { handle: "@howridiculous", slug: "howridiculous-net-worth" },
  { handle: "@lazarbeam", slug: "lazarbeam-net-worth" },
  { handle: "@ckntoys", slug: "ckntoys-net-worth" },
  { handle: "@howtobasic", slug: "howtobasic-net-worth" },
  { handle: "@doubledate", slug: "doubledatepodcast-net-worth" },
  { handle: "@lachlan", slug: "lachlan-net-worth" },
  { handle: "@jasminandjames", slug: "jasminandjames-net-worth" },
  { handle: "@glitch", slug: "glitch-net-worth" },
];

export async function fetchAustraliaChannels() {
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
