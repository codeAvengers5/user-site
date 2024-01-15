

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// Next.js API route support: https://nextjs.org/docs/api-

const StylelintPlugin = require("stylelint-webpack-plugin"); // line to add
module.exports = {
  reactStrictMode: true,
  // lines to add
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },

};