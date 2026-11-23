/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Match encoded or decoded forms of the KrazyDad PDF filename.
        source: '/bonus/:file*.pdf',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
