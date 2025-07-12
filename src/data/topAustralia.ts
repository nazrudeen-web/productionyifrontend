export const topChannelsList = [
 { handle: "@BouncePatrol", slug: "bouncepatrol-net-worth" },
  { handle: "@ChloeTing", slug: "chloeting-net-worth" },
  { handle: "@howridiculous", slug: "howridiculous-net-worth" },
  { handle: "@LazarBeam", slug: "lazarbeam-net-worth" },
  { handle: "@CKNToys", slug: "ckntoys-net-worth" },
  { handle: "@HowToBasic", slug: "howtobasic-net-worth" },
  { handle: "@DoubleDate", slug: "doubledatepodcast-net-worth" },
  { handle: "@Lachlan", slug: "lachlan-net-worth" },
  { handle: "@JasminAndJames", slug: "jasminandjames-net-worth" },
  { handle: "@GLITCH", slug: "glitch-net-worth" },
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
