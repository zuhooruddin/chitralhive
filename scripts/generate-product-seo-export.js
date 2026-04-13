/**
 * Generate DB-importable SEO fields for products.
 *
 * What it does:
 * - Fetches all products from: `${NEXT_PUBLIC_BACKEND_API_BASE}getAllItems`
 * - For each product, generates: metaTitle, metaDescription, metaKeywords
 * - Writes:
 *   - `product-seo-export.csv` (recommended for DB import)
 *   - `product-seo-export.sql` (optional; you must set table/column names)
 *
 * Usage:
 *   node scripts/generate-product-seo-export.js
 *
 * Optional env:
 *   NEXT_PUBLIC_BACKEND_API_BASE=https://api.chitralhive.com/api/
 *   NEXT_PUBLIC_URL=https://chitralhive.com
 *
 * Optional CLI:
 *   --sqlTable=items --idColumn=id --slugColumn=slug --titleColumn=metaTitle --descColumn=metaDescription --keywordsColumn=metaKeywords
 */

const axios = require("axios");
const fs = require("fs");
const path = require("path");

function parseArg(name, fallback) {
  const prefix = `--${name}=`;
  const hit = process.argv.find((a) => a.startsWith(prefix));
  if (!hit) return fallback;
  return hit.slice(prefix.length);
}

function ensureApiBase(raw) {
  let apiBase = raw || "https://api.chitralhive.com/api/";
  if (!apiBase.endsWith("/")) apiBase += "/";
  // If user provided https://api.xxx.com/ (no /api/), normalize to /api/
  if (!apiBase.includes("/api/")) apiBase = apiBase.replace(/\/$/, "") + "/api/";
  return apiBase;
}

function escapeCsv(value) {
  const s = String(value ?? "");
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function escapeSql(value) {
  return String(value ?? "").replace(/'/g, "''");
}

function stripHtml(html) {
  return String(html ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildKeywordString({ productName, brand, category }) {
  // Lightweight inline copy of the browser util (kept in JS here to avoid ESM import friction).
  const clusters = {
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

  const name = String(productName || "").trim();
  const cat = String(category || "").toLowerCase();
  const lowerName = name.toLowerCase();

  const bucket =
    /shilajit|salajeet|silajit|sila?jit/.test(lowerName) || /shilajit|salajeet/.test(cat)
      ? "shilajit"
      : /honey|shehad/.test(lowerName) || /honey/.test(cat)
        ? "honey"
        : /dry\s*fruit|nuts|badam|pista|akhrot|kishmish/.test(lowerName) ||
            /dry\s*fruit|dryfruit|nuts/.test(cat)
          ? "dryFruits"
          : /herb|herbal|ajwain|kalonji|saunf/.test(lowerName) || /herb/.test(cat)
            ? "herbs"
            : /craft|shawl|cap|topi|handmade|handicraft/.test(lowerName) ||
                /craft|handicraft/.test(cat)
              ? "crafts"
              : "general";

  const phrases = [
    ...(name ? [`${name} Pakistan`, `buy ${name} online Pakistan`, `${name} price in Pakistan`] : []),
    ...clusters[bucket],
    ...clusters.general,
    brand || "Chitral Hive",
  ]
    .map((s) => String(s || "").trim())
    .filter(Boolean);

  const seen = new Set();
  const out = [];
  for (const p of phrases) {
    const key = p.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
    if (out.length >= 28) break;
  }
  return out.join(", ");
}

function buildMetaTitle({ name, brand }) {
  const baseName = String(name || "").replace(/^buy\s+/i, "").trim() || "Chitrali Product";
  // Keep titles tight for SERP; site component already appends site name sometimes.
  return `${baseName} in Pakistan | ${brand || "Chitral Hive"}`.slice(0, 110);
}

function buildMetaDescription({ name, description, brand }) {
  const baseName = String(name || "").replace(/^buy\s+/i, "").trim() || "authentic Chitrali products";
  const clean = stripHtml(description);
  const first = clean ? clean.slice(0, 120) : "";
  const sentence =
    first && first.length >= 50
      ? first
      : `Buy authentic ${baseName} online in Pakistan from ${brand || "Chitral Hive"}. Nationwide delivery across major cities.`;
  // Soft-limit to typical meta length
  return sentence.length > 165 ? sentence.slice(0, 162) + "..." : sentence;
}

async function main() {
  const apiBase = ensureApiBase(process.env.NEXT_PUBLIC_BACKEND_API_BASE);
  const url = `${apiBase}getAllItems`;

  console.log(`Fetching products from: ${url}`);
  const res = await axios.get(url, { timeout: 30000, headers: { "Content-Type": "application/json" } });

  const products = Array.isArray(res.data)
    ? res.data
    : Array.isArray(res.data?.data)
      ? res.data.data
      : Array.isArray(res.data?.items)
        ? res.data.items
        : [];

  if (!products.length) {
    console.error("No products returned. Check API base URL/env.");
    process.exit(1);
  }

  const brand = "Chitral Hive";

  const rows = products.map((p) => {
    const id = p.id ?? "";
    const slug = p.slug ?? "";
    const name = p.name ?? "";
    const category = p.category ?? p.categoryName ?? "";
    const metaTitle = p.metaTitle && p.metaTitle !== "undefined" ? p.metaTitle : buildMetaTitle({ name, brand });
    const metaDescription =
      p.metaDescription && p.metaDescription !== "undefined"
        ? p.metaDescription
        : buildMetaDescription({ name, description: p.description, brand });
    const metaKeywords = buildKeywordString({ productName: name, brand, category });
    return { id, slug, name, category, metaTitle, metaDescription, metaKeywords };
  });

  // CSV export (safe for direct DB import tools)
  const csvHeader = [
    "id",
    "slug",
    "name",
    "category",
    "metaTitle",
    "metaDescription",
    "metaKeywords",
  ].join(",");
  const csvBody = rows
    .map((r) =>
      [
        r.id,
        r.slug,
        r.name,
        r.category,
        r.metaTitle,
        r.metaDescription,
        r.metaKeywords,
      ]
        .map(escapeCsv)
        .join(",")
    )
    .join("\n");

  const csvOut = path.join(__dirname, "..", "product-seo-export.csv");
  fs.writeFileSync(csvOut, `${csvHeader}\n${csvBody}\n`, "utf8");
  console.log(`Wrote CSV: ${csvOut}`);

  // Optional SQL export (you MUST align table/columns with your DB)
  const sqlTable = parseArg("sqlTable", "");
  if (sqlTable) {
    const idColumn = parseArg("idColumn", "id");
    const titleColumn = parseArg("titleColumn", "metaTitle");
    const descColumn = parseArg("descColumn", "metaDescription");
    const keywordsColumn = parseArg("keywordsColumn", "metaKeywords");

    const sql = rows
      .filter((r) => r.id !== "")
      .map(
        (r) =>
          `UPDATE ${sqlTable} SET ${titleColumn}='${escapeSql(r.metaTitle)}', ${descColumn}='${escapeSql(
            r.metaDescription
          )}', ${keywordsColumn}='${escapeSql(r.metaKeywords)}' WHERE ${idColumn}=${Number(r.id)};`
      )
      .join("\n");

    const sqlOut = path.join(__dirname, "..", "product-seo-export.sql");
    fs.writeFileSync(sqlOut, sql + "\n", "utf8");
    console.log(`Wrote SQL: ${sqlOut}`);
  } else {
    console.log("SQL not generated (pass --sqlTable=YOUR_TABLE_NAME if you want SQL).");
  }

  console.log(`Done. Products processed: ${rows.length}`);
}

main().catch((e) => {
  console.error("Failed:", e?.message || e);
  process.exit(1);
});

