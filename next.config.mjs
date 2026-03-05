/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['media.apidoxy.com'],
  },
};

export default nextConfig;
