const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: [
        './src/index.js',
    ],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching'
        })
    ],
    output: {
        filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
    // module: {
    //   rules: [
    //     //   加载css
    //     {
    //       test: /\.css$/,
    //       use: [
    //         'style-loader',
    //         'css-loader'
    //       ]
    //     },
    //     // 加载图片资源
    //     {
    //         test: /\.(png|svg|jpg|gif)$/,
    //         use: [
    //             'file-loader'
    //         ]
    //     },
    //     // 加载字体
    //     {
    //         test: /\.(woff|woff2|eot|ttf|otf)$/,
    //         use: [
    //             'file-loader'
    //         ]
    //     },
    //     // 加载数据 如 JSON 文件，CSV、TSV 和 XML
    //     {
    //         test: /\.(csv|tsv)$/,
    //         use: [
    //             'csv-loader'
    //         ]
    //     },
    //     {
    //         test: /\.xml$/,
    //         use: [
    //             'xml-loader'
    //         ]
    //     }
    //   ]
    // }
  };