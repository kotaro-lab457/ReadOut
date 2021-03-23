const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// const dotenv = require("dotenv-webpack");
// const { webpack } = require("webpack");
//const env = dotenv.config().parsed;

module.exports = () => {
  return {
    entry: {
      bundle: "./src/tsx/index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "js/[name].js",
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            // cssを出力するローダー
            "style-loader",
            // css をcommonJSに変換するローダー
            "css-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          include: path.resolve(__dirname, "src"),
          exclude: /node_module/,
        },
        {
          test: /\.(jpg|png)$/,
          // 画像（jpg or png）を出力するローダー
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            outputPath: "images",
            publicPath: "/images",
          },
        },
      ],
    },
    devtool: "source-map",
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    //plugins: [new webpack.DefinePlugin({ "process.env": JSON.stringify(env) })],
  };
};
