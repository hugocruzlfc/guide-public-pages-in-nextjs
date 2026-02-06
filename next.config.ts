import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  async redirects() {
    return [{ source: "/", destination: "/products", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "epwzesmp9vjqcvrw.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
