const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, arg) => {
  return {
    mode: arg.mode,
    entry: [
      "core-js/modules/es.promise",
      "core-js/modules/es.array.iterator",
      path.join(__dirname, "../src/index.jsx"),
    ],
    devtool: "inline-source-map",
    output: {
      path: path.join(__dirname, "../dist"),
      filename: "bundle.js",
    },
    devServer: {
      port: 3030,
      allowedHosts: "auto",
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: "url-loader",
          options: { limit: false },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/i,
          exclude: /node_modules/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]'
         }
          // use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
      }),
      new Dotenv({ path: path.resolve(__dirname, `../.env`) }),
    ],
  };
};
