/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.sanity.io", "tailwindui.com"],
  },
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    GOOGLE_CONVERSION: process.env.GOOGLE_CONVERSION,
  },
  i18n: {
    locales: ["ar"],
    defaultLocale: "ar",
  },
  async redirects() {
    return [
      {
        source: "/product",
        destination: "/",
        permanent: true,
      },
      {
        source: "/categories",
        destination: "/",
        permanent: true,
      },
      {
        source: "/search",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
