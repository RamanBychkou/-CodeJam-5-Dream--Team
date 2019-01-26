const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: __dirname,
  entry: './src/js/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.html`,
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|wav|otf|mp3|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false,
          attrs: ['img:src', 'link:href', 'sounds:src'],
        },
      },
    ],
  },
  mode: 'development',
  devtool: 'source-map',
};
