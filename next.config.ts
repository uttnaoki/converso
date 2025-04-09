import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/converso',
  assetPrefix: '/converso',
  trailingSlash: true,
};

export default nextConfig;
