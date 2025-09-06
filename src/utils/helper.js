// src/utils/formatters.js

export function getReadableTopics(topicCategories) {
  const topics =
    topicCategories?.map((url) => {
      const name = url.split("/").pop()?.replace(/_/g, " ") || "";
      return decodeURIComponent(name);
    }) || [];

  return topics[0] || "Creator";
}

export function getReadableTopicsAll(topicCategories) {
  const topics =
  topicCategories?.map((url) => {
    const name = url.split("/").pop()?.replace(/_/g, " ") || "";
    return decodeURIComponent(name);
  }) || [];

const readableTopics =
  topics.length > 1
    ? topics.slice(0, -1).join(", ") + " & " + topics.slice(-1)
    : topics[0] || "Creator";

    return readableTopics;
}

export function publishedDate(publishedAt) {
  return new Date(publishedAt).toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
}

export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
  );
}

export function formatNumber(n) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(n);
}

export function formatUSD(amount) {
  if (amount < 1000) {
    return `$${amount}`;
  }

  if (amount < 1_000_000) {
    return `$${new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 0,
    }).format(amount)}`;
  }

  if (amount < 1_000_000_000) {
    return `$${new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(amount)}`;
  }

  return `$${new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(amount)}`;
}
