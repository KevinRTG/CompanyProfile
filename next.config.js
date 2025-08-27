/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/.well-known/appspecific/com.chrome.devtools.json',
        destination: '/api/devtools-dummy', // bisa bikin handler kosong
      },
    ];
  },
};

module.exports = nextConfig;
