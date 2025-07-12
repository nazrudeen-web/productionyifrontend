export const topChannelsList = [
  { handle: "@peppapigofficial", slug: "peppapigofficial-net-worth"},
  { handle: "@nocopyrightsounds", slug: "nocopyrightsounds-net-worth"},
  { handle: "@peppapigespanollatinooficial", slug: "peppapigespanollatinooficial-net-worth"},
  { handle: "@dantdm", slug: "dantdm-net-worth"},
  { handle: "@linhnhishorts", slug: "linhnhishorts-net-worth"},
  { handle: "@misskaty1133", slug: "misskaty1133-net-worth"},
  { handle: "@mrmaxlife", slug: "mrmaxlife-net-worth" },
  { handle: "@ksiofficialmusic", slug: "ksiofficialmusic-net-worth" },
  { handle: "@dualipa", slug: "dualipa-net-worth" },
  { handle: "@jelly", slug: "jelly-net-worth" },
];

export async function fetchUKChannels() {
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
