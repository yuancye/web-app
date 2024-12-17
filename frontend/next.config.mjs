/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true, // Recommended for Next.js
   eslint: {
      // Ensure that ESLint runs automatically in development and production
      ignoreDuringBuilds: true,
   },
};

export default nextConfig;
