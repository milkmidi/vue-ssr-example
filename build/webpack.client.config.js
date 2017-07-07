const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/entry-client.js',
    vender: [
      'vue',
    ],
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.client.html',
    }),
    new FriendlyErrorsPlugin(),
    new VueSSRClientPlugin(),
  ],
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    port: 8080,
    hot: true,
    stats: {
      chunks: false,
      colors: true,
    },
  },
};
