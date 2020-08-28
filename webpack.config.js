const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Mangement'
      }),
      new CleanWebpackPlugin()
    ],
    // publicPath 也会在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
  };