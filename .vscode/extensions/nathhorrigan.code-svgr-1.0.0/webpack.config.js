//@ts-check

"use strict";

const path = require("path");

/**@type {import('webpack').Configuration}*/
const config = {
  target: "node",
  entry: {
    app: "./src/extension.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs2",
    devtoolModuleFilenameTemplate: "../[resource-path]",
  },
  devtool: "source-map",
  externals: {
    vscode: "commonjs vscode",
    "@svgr/core": "commonjs @svgr/core",
    "@svgr/plugin-svgo": "commonjs @svgr/plugin-svgo",
    "@svgr/plugin-jsx": "commonjs @svgr/plugin-jsx",
    "@svgr/plugin-prettier": "commonjs @svgr/plugin-prettier",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};
module.exports = config;
