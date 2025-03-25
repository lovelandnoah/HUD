const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const port = 3000;

module.exports = {
  // entry: "./public/Demo.js",

  entry: { index: path.resolve(__dirname, "public", "Demo.js") },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|demo)/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "boilerplate",
      template: path.join(__dirname, "public", "index.html"),
      inject: "body",
      // template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    host: "localhost",
    open: true,
    historyApiFallback: { index: "/" },
    hot: true,
    port: port,
  },
};
