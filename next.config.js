/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ezoic ads.txt redirect (Step 3 of their wizard)
  // When someone requests /ads.txt on your domain, send them to Ezoic's managed file.
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/dailymindsprint.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
