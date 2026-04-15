/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow all local images in public/
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
  },
  // Ensure environment variables are available
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
};

export default nextConfig;
