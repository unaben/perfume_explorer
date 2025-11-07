import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_PERFUME_DOMAIN,
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
