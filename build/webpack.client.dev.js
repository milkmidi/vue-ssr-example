const webpack = require('webpack');
// const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

const isProd = process.env.NODE_ENV === 'production';
const config = merge(base, {
  devtool: 'eval-source-map',
  plugins: [
    ...base.plugins,
    new HtmlWebpackPlugin({
      template: 'src/html/index.template.pug',
      data: {
        DEV_MODE: !isProd,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"',
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // a module is extracted into the vendor chunk if...
        return (
          // it's inside node_modules
          /node_modules/.test(module.context) &&
          // and not a CSS file (due to extract-text-webpack-plugin limitation)
          !/\.css$/.test(module.request)
        );
      },
    }),
  ],
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    noInfo: true,
    port: 3000,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      chunks: false,
    },
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
    // '/api': 'http://localhost:3000',
    },
  },
});
module.exports = config;

/*
module.exports = {
  entry: {
    app: './src/entry-client.js',
    vendor: [
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
      template: 'src/index.template.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new FriendlyErrorsPlugin(),
    new VueSSRClientPlugin(),
  ],
 
};
*/
