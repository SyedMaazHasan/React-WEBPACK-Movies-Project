"use strict";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CompressionPlugin = require("compression-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var Visualizer = require("webpack-visualizer-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: path.resolve("src"),
  mode: "production",
  entry: {
    main: ["babel-polyfill", "./index.js"],
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve("prodbuild"),
    publicPath: "/",
    filename: "public/[name].[hash].js", //this will provide hash value automatically
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    chrome: "54",
                    ie: "11",
                  },
                },
              ],
              "@babel/preset-react",
            ],
            plugins: [
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              "react-hot-loader/babel",
            ],
            env: {
              production: {
                presets: ["minify"],
              },
            },
          },
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: "raw-loader" }],
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        use: [{ loader: "url-loader" }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: "url-loader" }],
      },
      {
        test: /\.svg$/,
        use: [{ loader: "url-loader" }],
      },
      {
        test: /\.(p)?css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  optimization: {
    //generates a seperate bundle for dependencies
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new Visualizer(),
    new webpack.DefinePlugin({
      //declares a global env variable when bundle loads
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new CompressionPlugin(), //zip the whole bundle
    new MiniCssExtractPlugin("public/css/[name].[hash].css"), //generates new bundle for css
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({
      //generates index.html with proper reference to <script> tag for js and css
      template: path.resolve("public/index.html"),
      //favicon: path.resolve("src/public/favicon.ico"),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
