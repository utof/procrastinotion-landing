import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/procrastinotion",
  images: {
    unoptimized: true, // Disable default image optimization
  },

  // This generates static HTML/CSS/JS files suitable for GH Pages
  output: "export",
};

export default nextConfig;
