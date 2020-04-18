const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    'large-number': './src/index.js',
    'large-number.min': './src/index.js',
  },
  // https://webpack.js.org/configuration/output/#outputlibrary
  output: {
    filename: '[name].js',
    library: 'largeNumber', // 指定库的全局变量
    libraryExport: 'default', 
    libraryTarget: 'umd', // 支持库引入的方式
  },
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      })
    ]
  }
}