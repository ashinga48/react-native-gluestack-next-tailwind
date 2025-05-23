/** @type {import('next').NextConfig} */
const { DefinePlugin } = require("webpack");
const { withGluestackUI } = require("@gluestack/ui-next-adapter")

module.exports = withGluestackUI({
  reactStrictMode: true,
  transpilePackages: [
    "@gluestack-ui/nativewind-utils",
    "@gluestack-ui/themed",
    "nativewind",
    "react-native-css-interop",
    '@expo/html-elements',
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.alias["@unitools/router"] = "@unitools/router-next";
    config.resolve.alias["@unitools/image"] = "@unitools/image-next";
    config.resolve.alias["@unitools/link"] = "@unitools/link-next";
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    config.plugins.push(
      new DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      })
    );

    return config;
  },
  typescript: { ignoreBuildErrors: true },
});
