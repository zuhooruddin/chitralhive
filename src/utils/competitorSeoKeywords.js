/**
 * "Competitor keywords" here means common high-intent phrases used across
 * competing Pakistani e-commerce listings (price, buy online, delivery, cities, authenticity).
 *
 * Keep these as short phrases you can safely mix into product keywords/meta.
 */
export const COMPETITOR_KEYWORD_CLUSTERS = {
  general: [
    "buy online Pakistan",
    "price in Pakistan",
    "original",
    "pure",
    "authentic",
    "cash on delivery",
    "home delivery",
    "nationwide delivery",
    "best price",
    "latest price",
    "Pakistan",
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
  ],
  shilajit: [
    "Shilajit Pakistan",
    "Salajeet Pakistan",
    "سلاجیت",
    "Himalayan Shilajit",
    "Chitral Shilajit",
    "pure Shilajit resin",
    "original Salajeet",
    "Shilajit price in Pakistan",
    "buy Shilajit online Pakistan",
  ],
  honey: [
    "pure honey Pakistan",
    "honey price in Pakistan",
    "raw honey",
    "Sidr honey",
    "wild honey",
    "organic honey",
    "buy honey online Pakistan",
  ],
  dryFruits: [
    "dry fruits Pakistan",
    "dry fruits price in Pakistan",
    "mixed dry fruits",
    "premium dry fruits",
    "buy dry fruits online Pakistan",
  ],
  herbs: [
    "herbal products Pakistan",
    "natural herbs",
    "herbs price in Pakistan",
    "buy herbs online Pakistan",
  ],
  crafts: [
    "handicrafts Pakistan",
    "traditional crafts",
    "Chitrali handicrafts",
    "handmade products Pakistan",
    "buy handicrafts online Pakistan",
  ],
};

export function buildKeywordString({
  productName,
  brand = "Chitral Hive",
  category,
  extraPhrases = [],
  maxPhrases = 28,
}) {
  const name = String(productName || "").trim();
  const cat = String(category || "").toLowerCase();

  const bucket =
    /shilajit|salajeet|silajit|sila?jit/.test(name.toLowerCase()) ||
    /shilajit|salajeet/.test(cat)
      ? "shilajit"
      : /honey|shehad/.test(name.toLowerCase()) || /honey/.test(cat)
        ? "honey"
        : /dry\s*fruit|nuts|badam|pista|akhrot|kishmish/.test(name.toLowerCase()) ||
            /dry\s*fruit|dryfruit|nuts/.test(cat)
          ? "dryFruits"
          : /herb|herbal|ajwain|kalonji|saunf/.test(name.toLowerCase()) ||
              /herb/.test(cat)
            ? "herbs"
            : /craft|shawl|cap|topi|handmade|handicraft/.test(name.toLowerCase()) ||
                /craft|handicraft/.test(cat)
              ? "crafts"
              : "general";

  const phrases = [
    ...(name ? [`${name} Pakistan`, `buy ${name} online Pakistan`, `${name} price in Pakistan`] : []),
    ...COMPETITOR_KEYWORD_CLUSTERS[bucket],
    ...COMPETITOR_KEYWORD_CLUSTERS.general,
    brand,
    ...extraPhrases,
  ]
    .map((s) => String(s || "").trim())
    .filter(Boolean);

  // De-dupe case-insensitively
  const seen = new Set();
  const unique = [];
  for (const p of phrases) {
    const key = p.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(p);
    if (unique.length >= maxPhrases) break;
  }

  return unique.join(", ");
}

