import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'packmateindustries.com',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
