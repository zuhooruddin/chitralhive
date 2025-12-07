// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  swcMinify: true, // Use SWC for faster minification
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  devIndicators: {
    buildActivity: false, // Disable build indicator in dev mode for better performance
  },
  
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
  },
  
  images: {
    domains: ["100.64.6.105","idrisbookbank-dev-server.inara.tech","s3-inara.eu-central-1.linodeobjects.com","chitralhive.com"],
    formats: ['image/avif', 'image/webp'], // Enable modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // Cache images for 1 year (aggressive caching)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Optimize bundle size
  experimental: {
    optimizeCss: true,
  },
  
  // Enable production source maps for debugging (only for large first-party JS)
  productionBrowserSourceMaps: process.env.NODE_ENV === 'production' ? false : true,
  
  // Optimize fonts
  optimizeFonts: true,
  
  // Compiler options - remove console.log in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Reduce file handle pressure on Windows - CRITICAL for EMFILE errors
    // Always limit parallelism to prevent "too many open files" error
    config.parallelism = 1;
    
    // Disable caching to reduce file handles (Windows has low file handle limits)
    config.cache = false;
    
    // Optimize file watching to reduce open file handles in dev mode
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: false,
      };
    }
    
    // Optimize module resolution to reduce file system access
    config.resolve = {
      ...config.resolve,
      cache: false, // Disable resolve cache to reduce file handles
      // Limit symlink resolution to reduce file system calls
      symlinks: false,
    };
    
    // Reduce file system operations during build
    config.infrastructureLogging = {
      level: 'error', // Only log errors to reduce I/O
    };
    
    // Production optimizations
    if (!dev && !isServer) {
      // Optimize chunk splitting to reduce unused JavaScript
      config.optimization = {
        ...config.optimization,
        usedExports: true, // Enable tree-shaking
        sideEffects: false, // Mark as side-effect free for better tree-shaking
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 20, // Reduced to limit initial chunks
          minSize: 20000, // Only split chunks larger than 20KB
          maxSize: 200000, // Reduced max size for better code splitting
          cacheGroups: {
            default: false,
            vendors: false,
            // React chunk (highest priority - most used)
            react: {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              chunks: 'all',
              priority: 40,
              enforce: true,
            },
            // MUI core (high priority)
            mui: {
              name: 'mui',
              test: /[\\/]node_modules[\\/]@mui[\\/](?!icons-material)[\\/]/,
              chunks: 'all',
              priority: 35,
              enforce: true,
            },
            // MUI Icons (separate to reduce initial load and file handle pressure)
            muiIcons: {
              name: 'mui-icons',
              test: /[\\/]node_modules[\\/]@mui[\\/]icons-material[\\/]/,
              chunks: 'async', // Load on demand
              priority: 30,
              enforce: true,
              maxSize: 200000, // Split if larger to reduce file processing
            },
            // Large third-party libraries (load on demand)
            largeVendors: {
              name: 'large-vendors',
              test: /[\\/]node_modules[\\/](apexcharts|react-apexcharts|react-quill|simplebar|react-floating-whatsapp|react-toastify)[\\/]/,
              chunks: 'async', // Load on demand
              priority: 20,
              enforce: true,
            },
            // Common vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.quilljs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.quilljs.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://api.chitralhive.com https://admin.chitralhive.com https://chitralhive.com; frame-ancestors 'none';",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/Category/:slug',
        destination: '/categories/:slug',
        permanent: false,
      },
      {
        source: '/Cat/:slug',
        destination: '/categories/:slug',
        permanent: false,
      },
      
      // {
      //   source: '/product:slug(\\.html)',
      //   destination: '/',
      //   permanent: true,
      // },
      // {
      //   source: '/items.php*',
      //   destination: '/',
      //   permanent: true,
      // },
      
    ]

  },
};
// '/product/:slug(\\{.*\.html$})',
