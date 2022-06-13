/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "cdn.sanity.io", "tailwindui.com"],
  },
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  async redirects() {
    return [
      {
        source: "/product",
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
