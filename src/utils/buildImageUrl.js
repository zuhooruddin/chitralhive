/**
 * Build an absolute image URL for catalog media paths.
 * Mirrors sitemap logic so product JSON-LD and sitemaps stay consistent.
 *
 * @param {string|null|undefined} rawImagePath
 * @param {string|null|undefined} imageBaseUrl - e.g. NEXT_PUBLIC_IMAGE_BASE_API_URL or API base
 * @param {string|null|undefined} apiBase - NEXT_PUBLIC_BACKEND_API_BASE (with or without trailing slash)
 * @returns {string|null}
 */
export function buildImageUrl(rawImagePath, imageBaseUrl, apiBase) {
  if (!rawImagePath) return null;

  if (/^https?:\/\//i.test(rawImagePath)) {
    // Some upstream values come back as malformed absolute URLs like:
    //   https://api.example.comsitesetting/foo.png
    // which browsers interpret as host "api.example.comsitesetting".
    // Fix the common missing "/" after the TLD for known media folders.
    return String(rawImagePath).replace(
      /\.(com|net|org|io|co|pk)(sitesetting|slider|category_icon|item_image|brand|blog|bundle)\//gi,
      ".$1/$2/"
    );
  }

  const cleanedPath = String(rawImagePath).replace(/^\/+/, "");
  const normalizedImageBase = normalizeBaseUrl(imageBaseUrl);
  const normalizedApiBase = normalizeBaseUrl(apiBase);
  // Many deployments expose API at `/api` but serve media at `/media` (no `/api`).
  // E.g.:
  // - API:   https://api.chitralhive.com/api/...
  // - Media: https://api.chitralhive.com/media/...
  const apiOrigin = normalizedApiBase ? normalizedApiBase.replace(/\/api$/i, "") : "";
  const mediaBase = apiOrigin ? `${apiOrigin}/media` : "";

  if (cleanedPath.startsWith("api/media/") || cleanedPath.startsWith("media/")) {
    const relativePath = cleanedPath.replace(/^api\/media\//, "media/");
    return apiOrigin ? `${apiOrigin}/${relativePath}` : `${normalizedApiBase}/${relativePath}`;
  }

  if (cleanedPath.startsWith("item_image/")) {
    return apiOrigin ? `${apiOrigin}/media/${cleanedPath}` : `${normalizedApiBase}/media/${cleanedPath}`;
  }

  if (cleanedPath.startsWith("api/")) {
    return `${normalizedImageBase}/${cleanedPath}`;
  }

  if (/^(sitesetting|slider|category_icon|item_image|brand|blog|bundle)\//i.test(cleanedPath)) {
    return mediaBase ? `${mediaBase}/${cleanedPath}` : `${normalizedImageBase}/${cleanedPath}`;
  }

  return `${normalizedImageBase}/${cleanedPath}`;
}

/**
 * @param {string} url
 * @returns {boolean}
 */
export function isLikelyValidHttpUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const u = new URL(url.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeBaseUrl(value) {
  if (!value || typeof value !== "string") return "";

  const trimmed = value.trim();
  if (!trimmed) return "";

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  return withProtocol.replace(/\/+$/, "");
}
