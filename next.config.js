// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

const path = require("path");

// Webpack Bundle Analyzer (optional)
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "production",
  compress: true,
  poweredByHeader: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: process.env.NODE_ENV !== "production",
    remotePatterns: [
      { protocol: "http", hostname: "100.64.6.105", pathname: "/**" },
      { protocol: "https", hostname: "100.64.6.105", pathname: "/**" },
      { protocol: "http", hostname: "idrisbookbank-dev-server.inara.tech", pathname: "/**" },
      { protocol: "https", hostname: "idrisbookbank-dev-server.inara.tech", pathname: "/**" },
      { protocol: "http", hostname: "api.chitralhive.com", pathname: "/**" },
      { protocol: "https", hostname: "api.chitralhive.com", pathname: "/**" },
      { protocol: "http", hostname: "s3-inara.eu-central-1.linodeobjects.com", pathname: "/**" },
      { protocol: "https", hostname: "s3-inara.eu-central-1.linodeobjects.com", pathname: "/**" },
      { protocol: "http", hostname: "chitralhive.com", pathname: "/**" },
      { protocol: "https", hostname: "chitralhive.com", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [60, 70, 75, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  experimental: {
    optimizeCss: process.env.DISABLE_CSS_OPT !== "true",
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "@mui/lab",
      "@mui/system",
      "lodash",
      "date-fns",
      "swr",
    ],
  },

  productionBrowserSourceMaps:
    process.env.NODE_ENV === "production" ? false : true,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "src"),
    };

    if (!isServer) {
      config.target = ["web", "es2020"];
      config.resolve.fallback = {
        ...config.resolve.fallback,
      };
    }

    if (process.platform === "win32") {
      config.parallelism = 1;
    } else {
      config.parallelism = Math.min(4, require("os").cpus().length);
    }

    if (process.platform !== "win32" && !dev) {
      if (!config.cache) {
        config.cache = {
          type: "filesystem",
          buildDependencies: {
            config: [__filename],
          },
        };
      }
    } else if (process.platform === "win32") {
      config.cache = false;
    }

    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: process.platform === "win32",
      };
    }

    config.resolve = {
      ...config.resolve,
      cache: process.platform !== "win32",
      symlinks: true,
    };

    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
          {
            key: "Vary",
            value: "Accept-Encoding",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.quilljs.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net https://ep2.adtrafficquality.google https://*.adtrafficquality.google https://www.clarity.ms https://scripts.clarity.ms https://fundingchoicesmessages.google.com; style-src 'self' 'unsafe-inline' https://cdn.quilljs.com https://unpkg.com https://cdn.jsdelivr.net; font-src 'self' data:; img-src 'self' data: https: blob:; media-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://api.chitralhive.com https://admin.chitralhive.com https://chitralhive.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net https://ep1.adtrafficquality.google https://*.adtrafficquality.google https://www.clarity.ms https://scripts.clarity.ms https://i.clarity.ms https://v.clarity.ms https://b.clarity.ms; frame-src 'self' https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net https://ep2.adtrafficquality.google https://*.adtrafficquality.google https://www.google.com; object-src 'self' data:; frame-ancestors 'none';",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/image-proxy",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/callback/google",
        destination: "/api/auth/callback/google",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/assets/images/idris-logo.png",
        destination: "/assets/images/logo.svg",
        permanent: true,
      },
      {
        source: "/shilajit",
        destination: "/shilajit-salajeet",
        permanent: true,
      },
      {
        source: "/salajeet",
        destination: "/shilajit-salajeet",
        permanent: true,
      },
      {
        source: "/Category/:slug",
        destination: "/categories/:slug",
        permanent: true,
      },
      {
        source: "/Cat/:slug",
        destination: "/categories/:slug",
        permanent: true,
      },
      {
        source: "/category",
        destination: "/categories",
        permanent: true,
      },
      {
        source: "/category/:slug",
        destination: "/categories/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
