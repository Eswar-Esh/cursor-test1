/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'localhost',
      'livekit.io',
      'tavus.com',
      'avatars.githubusercontent.com',
    ],
  },
  webpack: (config, { isServer }) => {
    // Handle WebRTC and media processing
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    // Optimize for WebRTC
    config.externals = [...(config.externals || []), 'canvas', 'jsdom'];

    return config;
  },
  // Enable standalone output for Docker
  output: 'standalone',
  // Disable telemetry
  telemetry: false,
};

module.exports = nextConfig; 