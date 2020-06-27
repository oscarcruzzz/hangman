const HtmlWebpackPligin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPligin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
