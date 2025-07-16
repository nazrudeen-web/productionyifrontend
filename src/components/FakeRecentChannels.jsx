// src/components/FakeRecentChannels.jsx
import { useEffect, useState } from "react";

const KEYS_API = "https://api.youtubersincome.com/sitemap-keys";
const CHANNEL_API = "https://api.youtubersincome.com/kv?handle=";

export default function FakeRecentChannels() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const keysRes = await fetch(KEYS_API);
        const keys = await keysRes.json();

        const fetches = keys.map(async (key) => {
          try {
            const res = await fetch(`${CHANNEL_API}${encodeURIComponent(key)}`);
            const data = await res.json();
            return data?.subscriberCount > 500000 ? data : null;
          } catch {
            return null;
          }
        });

        const results = (await Promise.all(fetches)).filter(Boolean);
        const selected = results.sort(() => 0.5 - Math.random()).slice(0, 5);
        setChannels(selected);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (!channels.length) {
    return <p className="text-center py-16 text-gray-500">Loading trending channels...</p>;
  }

  return (
    <section className="max-w-4xl mx-auto py-16 px-4 border-b border-divider">
      <h2 className="text-lg font-bold uppercase mb-4 text-center md:text-2xl">
        Recently Viewed by Users
      </h2>
      <p className="text-center text-gray-600 mb-10 text-sm md:text-base">
        Explore trending YouTube creators users are searching for right now.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {channels.map((channel, index) => (
          <a
            key={index}
            href={`/${channel.handle.replace(/^@/, "")}-net-worth`}
            className="flex flex-col items-center text-center underline"
          >
            <img
              src={channel.thumbnail}
              alt={`${channel.title} Profile`}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover shadow-md"
              loading={index < 2 ? "eager" : "lazy"}
            />
            <span className="mt-2 font-medium text-gray-800">{channel.title}</span>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/top-channels"
          className="inline-flex items-center gap-2 rounded-lg bg-tPrimary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          View More Channels
        </a>
      </div>
    </section>
  );
}
