/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes plain files to out/, which Roxyon serves directly (no Node process).
  output: 'export',
  // /about -> out/about/index.html, so every page works on a plain static host.
  trailingSlash: true,
  // The image optimiser needs a server; a static export serves images as they are.
  images: { unoptimized: true },
};

export default nextConfig;
