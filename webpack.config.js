const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devServer: {
    port: 8080,
    // contentBase: path.resolve(__dirname, 'dist')
  },
 /*  devtool: "eval-source-map",
  devServer: {
  watchFiles: ["./src/index.html"],
   
  },  */
  /* devServer: {
    hot: true,
    inline: true,
  }, */


  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      /* {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }, */
    ],
  },
};