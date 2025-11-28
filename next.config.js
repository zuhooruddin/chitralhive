// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  
  devIndicators: {},
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
  },
  
  images: {
    domains: ["100.64.6.105","idrisbookbank-dev-server.inara.tech","s3-inara.eu-central-1.linodeobjects.com","chitralhive.com"],
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
