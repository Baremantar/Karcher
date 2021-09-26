const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].${ext}`);

module.exports = {
    mode: "development",
    entry: {
      index: path.resolve(__dirname, "./index.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: filename("js"),
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.pug$/,
          use: ["pug-loader"],
        },
        {
          test: /\.(png|jpe?g|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "png",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new HtmlWebpackPlugin({
        filename: filename("html"),
        template: "./src/pug/DevelopPage.pug",
      }),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      hot: true,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
  };
  