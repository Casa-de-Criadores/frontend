// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig: import('next').NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: '**.casadecriadores.com.br',
            },
        ],
    },
};

module.exports = nextConfig;