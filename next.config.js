/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "www.tbsnews.net"],
  },
  output: 'export',
  experimental: {
    // Remove any invalid options here
  },
 
};

module.exports = nextConfig;
