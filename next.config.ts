import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.PERFUME_DOMAIN,
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
