/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src/components/*"],
  },
  output: "standalone"
};

export default nextConfig;
