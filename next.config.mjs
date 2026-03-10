/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  ...(isGithubPages && { output: "export" }),
  basePath: isGithubPages ? "/thenivasaproject" : "",
  assetPrefix: isGithubPages ? "/thenivasaproject/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
