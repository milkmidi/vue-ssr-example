/* eslint global-require:off */
const webpack = require('webpack');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');


module.exports = merge(base, {
  target: 'node',
  devtool: false,
  entry: './src/js/entry-server.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2',
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': JSON.stringify('server'),
    }),
    new VueSSRServerPlugin(),
  ],
});
