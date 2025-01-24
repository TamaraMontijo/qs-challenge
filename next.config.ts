import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en-US', 'fr', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/venue/9',  // Rota proxy local (ajuste conforme necessário)
        destination: 'https://cdn-dev.preoday.com/challenge/venue/9',  // Rota da API real
      },
      {
        source: '/api/menu',  
        destination: 'https://cdn-dev.preoday.com/challenge/menu',  
      }
    ];
  },
};

export default nextConfig;
