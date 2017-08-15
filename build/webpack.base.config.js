const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: ['./src/js/entry-client.js'],
    vendor: [
      'vue',
      'vue-router',
      'vuex',
    ],
  },
  devtool: isProd ? false : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: isProd ? 'js/[name].[chunkhash].js' : 'js/[name].js',
  },
  resolve: {
    modules: [
      path.resolve('src/js'),
      path.resolve('src/img'),
      path.resolve('src/css'),
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    alias: {
    },
    extensions: ['.js', '.vue'],
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: isProd,
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: '[name].[ext]?[hash]',
          },
        },
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            self: true,
            pretty: true,
            // pretty: !isProd,
          },
        },
      },
    ],
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false,
  },
  plugins: isProd
    ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
      }),
      new ExtractTextPlugin({
        filename: 'css/app.[chunkhash].css',
      }),
    ]
    : [
      new FriendlyErrorsPlugin(),
    ],
};
