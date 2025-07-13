export const topChannelsList = [
  { handle: "@tsurikishow", slug: "tsurikishow-net-worth" },
  { handle: "@kidibli", slug: "kidibli-net-worth" },
  { handle: "@kurzgesagt", slug: "kurzgesagt-net-worth" },
  { handle: "@boxtoxtv", slug: "boxtoxtv-net-worth" },
  { handle: "@haertetest", slug: "haertetest-net-worth" },
  { handle: "@noelgoescrazy", slug: "noelgoescrazy-net-worth" },
  { handle: "@familybooms", slug: "familybooms-net-worth" },
  { handle: "@talkingangela", slug: "talkingangela-net-worth" },
  { handle: "@tvkde", slug: "tvkde-net-worth" },
  { handle: "@icecreamrolls", slug: "icecreamrolls-net-worth" },
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
