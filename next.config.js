//** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  env: {
    siteTitle: '服装コンプリメントエージェント',
    maxFileUploadCount: 10,
    vercelBlobApiUrl: process.env.VERCEL_BLOB_API_URL, // 環境変数を設定
  },
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
