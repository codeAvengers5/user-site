// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// Next.js API route support: https://nextjs.org/docs/api-

/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["app"] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  }
};
