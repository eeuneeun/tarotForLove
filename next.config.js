/** @type {import('next').NextConfig} */
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const debug = process.env.NODE_ENV !== "production";
const repository = "tarotForLove";

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs, net, tls` module
    if (!isServer) {
      config.node = {
        fs: "empty",
        net: "empty",
        tls: "empty",
        "fs-extra": "empty",
      };
    }
    return config;
  },
  output: "export",
  reactStrictMode: true,
  assetPrefix: ".",
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  generateEtags: false,
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),
    );
    config.resolve.modules.push(__dirname);

    return config;
  },
};

module.exports = nextConfig;
