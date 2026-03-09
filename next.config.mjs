/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: isProd ? "/thenivasaproject" : "",
  assetPrefix: isProd ? "/thenivasaproject/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
