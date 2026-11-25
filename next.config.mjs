/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Images uploaded in Sanity Studio
    remotePatterns: [new URL("https://cdn.sanity.io/images/**")],
  },
};

export default nextConfig;
