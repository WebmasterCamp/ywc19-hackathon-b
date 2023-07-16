/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.hd.co.th',
        port: '',
        pathname: '/*/**',
      },
    ],
  },
}

module.exports = nextConfig
