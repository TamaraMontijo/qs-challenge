import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en-US', 'fr', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  images: {
    domains: ['preodemo.gumlet.io'],  
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/venue/9',  
        destination: 'https://cdn-dev.preoday.com/challenge/venue/9',  
      },
      {
        source: '/api/menu',  
        destination: 'https://cdn-dev.preoday.com/challenge/menu',  
      }
    ];
  },
};

export default nextConfig;
