# Cache Headers Fix for API Images

## Problem
Images loaded from `api.chitralhive.com` are showing "None" cache TTL in Lighthouse, causing:
- Images re-downloaded on every visit
- Slower repeat visits
- Higher bandwidth usage

## Solution

### Option 1: Backend Cache Headers (Recommended - Best Performance)

Add cache headers in your Django backend for media files:

**Django Settings (`settings.py`):**
```python
# Add to your settings.py
CORS_ALLOWED_ORIGINS = [
    "https://chitralhive.com",
    "https://www.chitralhive.com",
]

# Cache headers for media files
if not DEBUG:
    # Production: Use CDN or reverse proxy cache headers
    # For nginx/apache, add these headers:
    # add_header Cache-Control "public, max-age=31536000, immutable";
    pass
```

**Nginx Configuration (if using nginx):**
```nginx
location /api/media/ {
    alias /path/to/media/;
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    add_header X-Content-Type-Options "nosniff";
    access_log off;
}
```

**Apache Configuration (if using apache):**
```apache
<LocationMatch "^/api/media/.*\.(jpg|jpeg|png|gif|webp|avif)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
    Header set Cache-Control "public, max-age=31536000, immutable"
    Header set X-Content-Type-Options "nosniff"
</LocationMatch>
```

### Option 2: Next.js Image Optimization (Already Configured)

Next.js Image component automatically adds cache headers when images go through the optimization API. The issue is that the **source image is still 1.8MB PNG**.

**Action Required:**
1. Run image optimization to convert PNG to WebP:
   ```bash
   cd E:\chitralhive\chitralhivedjango
   python manage.py optimize_images --path=media/slider --quality=85 --backup
   ```

2. Update image references in database to use `.webp` files

3. Next.js will then:
   - Serve optimized WebP/AVIF versions
   - Add proper cache headers automatically
   - Reduce file size by 70-80%

### Option 3: Use Image Proxy (Current Implementation)

The image proxy at `/api/image-proxy` adds cache headers, but it's not being used for slider images.

**To use the proxy:**
1. Update image URLs to use the proxy:
   ```javascript
   // Instead of:
   const imageUrl = `${imgbaseurl}${slider.image}`;
   
   // Use:
   const imageUrl = `/api/image-proxy?url=${encodeURIComponent(`${imgbaseurl}${slider.image}`)}`;
   ```

2. This adds cache headers but adds an extra hop (slightly slower)

## Immediate Fix

**Run this command NOW:**
```powershell
cd E:\chitralhive\chitralhivedjango
python manage.py optimize_images --path=media/slider --quality=85 --backup
```

This will:
- Convert 1.8MB PNG → ~500KB WebP (73% reduction)
- Next.js Image will then add cache headers automatically
- Fix both the cache TTL and payload size issues

## Verification

After optimizing images, check:
1. **Lighthouse Audit:**
   - Cache TTL should show "1y" or "31536000"
   - Image size should be ~500KB instead of 1.8MB

2. **Network Tab:**
   - Response headers should include: `Cache-Control: public, max-age=31536000, immutable`
   - File format should be WebP or AVIF

3. **File System:**
   - Check `media/slider/` folder for `.webp` files
   - Original PNG files backed up in `media/backups/`

## Expected Results

| Metric | Before | After |
|--------|--------|-------|
| **Cache TTL** | None | 1 year |
| **File Size** | 1,863 KiB | ~500 KiB |
| **Format** | PNG | WebP |
| **Repeat Visit Speed** | Slow | Fast |

---

**Priority:** 🔴 HIGH - Run image optimization immediately to fix both cache and payload issues!

