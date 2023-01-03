/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['interactive-examples.mdn.mozilla.net', 'blog-1304565468.cos.ap-shanghai.myqcloud.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
