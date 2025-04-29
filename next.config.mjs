/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.4000days.com" }],
        destination: "https://4000days.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
