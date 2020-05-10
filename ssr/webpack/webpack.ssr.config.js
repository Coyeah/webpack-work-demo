const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入 html-webpack-plugin 插件,作用是添加模板到编译完成后的 dist 的文件里面，用于生成 html。
const prod = require('./webpack.prod.config.js');
const paths = require('./config/paths');
const website = require('./config/website');

module.exports = merge(prod, {
  mode: 'none',
  output: {
    filename: `[name]-server.js`,
    chunkFilename: `[name]-server.js`,
    libraryTarget: 'umd',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `${website.title}`, // 配置生成的 html 的 title，不会主动替换，需要通过模板引擎语法获取来配置
      filename: 'index.html',
      inject: true,
      template: paths.appEjs, // 本地模板文件的位置，支持加载器（如 handlebars、ejs、undersore、html 等）
      minify: {
        // 用于压缩 html 的配置
        removeComments: false,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyURLs: true,
        minifyCss: true, // 压缩 html 中出现的 css 代码
        minifyJs: true, // 压缩 html 中出现的 js 代码
      },
    }),
  ],
});
