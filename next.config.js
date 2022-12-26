/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['interactive-examples.mdn.mozilla.net'],
  },
}

module.exports = nextConfig
