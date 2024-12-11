/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hoyw5roiqu7mak0o.public.blob.vercel-storage.com",
      },
    ],
  },
    experimental: {
      serverActions: {
        bodySizeLimit: "45mb",
      },
    },
  };
  
  env: {
    siteTitle: '服装コンプリメントエージェント',
    maxFileUploadCount: 10,
  },
  trailingSlash: true,
  experimental: {
      appDir: true,
  },
};
  
module.exports = nextConfig;