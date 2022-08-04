const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  return {
    entry: "./src/index.jsx",
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      port: 3030,
      allowedHosts: "auto",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|webp)$/,
          loader: "url-loader",
          options: { limit: false },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/,
          exclude: /node_modules/,
          use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
      }),
      new Dotenv({ path: `./.env` }),
    ],
  };
};
