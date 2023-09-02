/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'geeksinvention.com',
        port: '/**'
      },
    ],
  },
}

module.exports = nextConfig
