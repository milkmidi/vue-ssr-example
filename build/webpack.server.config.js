/* eslint global-require:off */
const webpack = require('webpack');
const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

const env = process.env.NODE_ENV || 'development';


module.exports = {
  target: 'node',
  entry: {
    app: './src/entry-server.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.server.js',
    libraryTarget: 'commonjs2',
  },
  externals: Object.keys(require('../package.json').dependencies),
  resolve: {
    modules: [
      path.resolve('node_modules'),
    ],
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      'process.env.VUE_ENV': '"server"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new VueSSRServerPlugin(),
    new FriendlyErrorsPlugin(),
  ],
};
