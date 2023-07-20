/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "www.tbsnews.net"],
  },
  output: {
    // This will create the static files in the "out" directory.
    dir: 'out',
  },
};

module.exports = nextConfig;
