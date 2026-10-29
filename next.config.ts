import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Vercel Blob — current uploads (videos/ + thumbnails/)
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      // Cloudinary — legacy uploads that are still referenced in data/projects.ts
      { protocol: "https", hostname: "res.cloudinary.com" },
      // Public Google Drive video thumbnails used by the reels gallery
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/d/**" },
    ],
  },
};

export default nextConfig;
