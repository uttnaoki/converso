/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/converso',
  assetPrefix: '/converso',
};

module.exports = nextConfig;
