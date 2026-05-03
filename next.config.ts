import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/kontakt",
        destination: "/",
        permanent: true,
      },
      {
        source: "/priser",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
