const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common(), {
  mode: "development",
  watch: true,
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "public"),
    port: "9000",
  },
  devtool: "source-map",
});
