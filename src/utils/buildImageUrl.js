/**
 * Normalize catalog media URLs for `api.chitralhive.com` so SSR and the browser
 * always emit the same `src` (public media is under `/api/media/...`).
 *
 * @param {string|null|undefined} url
 * @returns {string|null|undefined}
 */
export function canonicalizeMediaUrl(url) {
  if (!url || typeof url !== "string") return url;
  let s = url.replace(/\/api\/api\/media\//gi, "/api/media/");
  s = s.replace(/^(https?:\/\/api\.chitralhive\.com)\/media\//i, "$1/api/media/");
  return s;
}

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
    return canonicalizeMediaUrl(
      String(rawImagePath).replace(
        /\.(com|net|org|io|co|pk)(sitesetting|slider|category_icon|item_image|brand|blog|bundle)\//gi,
        ".$1/$2/"
      )
    );
  }

  const cleanedPath = String(rawImagePath).replace(/^\/+/, "");
  const normalizedImageBase = normalizeBaseUrl(imageBaseUrl);
  const normalizedApiBase = normalizeBaseUrl(apiBase);
  const apiOrigin = normalizedApiBase ? normalizedApiBase.replace(/\/api$/i, "") : "";
  const apiMediaBase = apiOrigin ? `${apiOrigin}/api/media` : "";

  if (cleanedPath.startsWith("api/media/") || cleanedPath.startsWith("media/")) {
    const suffix = cleanedPath.replace(/^api\/media\//i, "").replace(/^media\//i, "");
    const imageOrigin = normalizedImageBase.replace(/\/api$/i, "");
    const joined = apiMediaBase
      ? `${apiMediaBase}/${suffix}`
      : normalizedApiBase
        ? `${normalizedApiBase.replace(/\/api$/i, "")}/api/media/${suffix}`
        : imageOrigin
          ? `${imageOrigin}/api/media/${suffix}`
          : `${normalizedImageBase}/${suffix}`;
    return canonicalizeMediaUrl(joined);
  }

  if (cleanedPath.startsWith("item_image/")) {
    return canonicalizeMediaUrl(
      apiMediaBase
        ? `${apiMediaBase}/${cleanedPath}`
        : normalizedApiBase
          ? `${normalizedApiBase.replace(/\/api$/i, "")}/api/media/${cleanedPath}`
          : `${normalizedImageBase.replace(/\/api$/i, "")}/api/media/${cleanedPath}`
    );
  }

  if (cleanedPath.startsWith("api/")) {
    return canonicalizeMediaUrl(`${normalizedImageBase}/${cleanedPath}`);
  }

  if (/^(sitesetting|slider|category_icon|item_image|brand|blog|bundle)\//i.test(cleanedPath)) {
    return canonicalizeMediaUrl(
      apiMediaBase
        ? `${apiMediaBase}/${cleanedPath}`
        : normalizedImageBase
          ? `${normalizedImageBase.replace(/\/api$/i, "")}/api/media/${cleanedPath}`
          : `${normalizedImageBase}/${cleanedPath}`
    );
  }

  return canonicalizeMediaUrl(`${normalizedImageBase}/${cleanedPath}`);
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

/**
 * Stricter check for Product JSON-LD / merchant listings: absolute URL, HTTPS,
 * and a non-empty hostname (avoids values Google reports as invalid image URLs).
 *
 * @param {string|null|undefined} url
 * @returns {boolean}
 */
export function isHttpsProductImageUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const u = new URL(url.trim());
    if (u.protocol !== "https:") return false;
    if (!u.hostname || u.hostname.includes("..")) return false;
    return true;
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
