/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.freepik.com",
      "cdn-icons-png.flaticon.com",
      "cdn.pixabay.com",
      "images.oyoroomscdn.com",
    ],
  },
};

module.exports = nextConfig;
