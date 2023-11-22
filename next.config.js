/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
appDir:true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
