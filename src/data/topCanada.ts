export const topChannelsList = [
  { handle: "@supersimplesongs", slug: "supersimplesongs-net-worth"},
  { handle: "@sierrarhiafam", slug: "sierrarhiafam-net-worth"},
  { handle: "@nickpro", slug: "nickpro-net-worth"},
  { handle: "@watchmojo", slug: "watchmojo-net-worth"},
  { handle: "@unboxtherapy", slug: "unboxtherapy-net-worth"},
  { handle: "@matt.larose", slug: "mattlarose-net-worth"},
  { handle: "@diaryof4", slug: "diaryof4-net-worth" },
  { handle: "@lukedavidson81", slug: "lukedavidson81-net-worth" },
  { handle: "@linustechtips", slug: "linustechtips-net-worth" },
  { handle: "@typicalgamer", slug: "typicalgamer-net-worth" },
];

export async function fetchCanadaChannels() {
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
