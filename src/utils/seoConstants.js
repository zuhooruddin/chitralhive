/**
 * Central SEO defaults for chitralhive.com (Next.js + Django API).
 * Shilajit / Salajeet (سلاجیت) is a primary commercial keyword cluster for PK.
 */

export const normalizeSiteUrl = (value) => {
  const fallback = "https://chitralhive.com";
  const raw = typeof value === "string" && value.trim() ? value.trim() : fallback;

  try {
    const parsed = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    parsed.protocol = "https:";

    if (parsed.hostname.toLowerCase() === "www.chitralhive.com") {
      parsed.hostname = "chitralhive.com";
    }

    return parsed.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
};

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_URL);
export const SITE_NAME = "Chitral Hive";

export const sanitizeSiteName = (value) => {
  if (!value || typeof value !== "string") return SITE_NAME;

  const normalized = value
    .replace(/\s+/g, " ")
    .replace(/\s*[|/-]\s*/g, " | ")
    .trim();

  if ((normalized.match(/chitral\s*hive/gi) || []).length > 0) {
    return SITE_NAME;
  }

  return normalized;
};

/** High-intent and synonym terms for Himalayan / Chitral-sourced resin */
export const SHILAJIT_KEYWORD_PHRASES =
  "Shilajit Pakistan, Salajeet Pakistan, buy Shilajit online Pakistan, pure Shilajit price Pakistan, Himalayan Shilajit, Salajeet price in Pakistan, authentic Shilajit Chitral, Chitral Shilajit, mineral pitch Pakistan, Asphaltum Pakistan";

/** Appended to default keyword lists sitewide */
export const DEFAULT_KEYWORD_SUFFIX = `, ${SHILAJIT_KEYWORD_PHRASES}`;

export const DEFAULT_META_DESCRIPTION =
  "Shop authentic Chitrali products online in Pakistan at Chitral Hive — including pure Himalayan Shilajit (Salajeet), honey, dry fruits, herbs, and crafts from Chitral, Khyber Pakhtunkhwa. Nationwide delivery.";

export const SHILAJIT_LANDING_PATH = "/shilajit-salajeet";
export const CHITRAL_DIARY_LANDING_PATH = "/chitral-diary-website-and-products";
export const SHANDUR_FESTIVAL_LANDING_PATH = "/shandur-polo-festival-2026";
export const CHITRAL_FOOD_LANDING_PATH = "/chitral-food";
