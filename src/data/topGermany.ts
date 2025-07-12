export const topChannelsList = [
  { handle: "@TsurikiShow", slug: "tsurikishow-net-worth" },
  { handle: "@Kidibli", slug: "kidibli-net-worth" },
  { handle: "@Kurzgesagt", slug: "kurzgesagt-net-worth" },
  { handle: "@boxtoxtv", slug: "boxtoxtv-net-worth" },
  { handle: "@HaerteTest", slug: "haertetest-net-worth" },
  { handle: "@noelgoescrazy", slug: "noelgoescrazy-net-worth" },
  { handle: "@FAMILYBOOMS", slug: "familybooms-net-worth" },
  { handle: "@TalkingAngela", slug: "talkingangela-net-worth" },
  { handle: "@TVKde", slug: "TVKde-net-worth" },
  { handle: "@IceCreamRolls", slug: "icecreamrolls-net-worth" },
];

export async function fetchGermanyChannels() {
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
