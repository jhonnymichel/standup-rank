const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/scss/index.scss', './src/js/app.js'],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      'scss': path.resolve(__dirname, 'src/scss'),
      'img': path.resolve(__dirname, 'src/img'),
      'app': path.resolve(__dirname, 'src/js'),
      'config': path.resolve(__dirname, 'src/config.js'),
      'app-metadata': path.resolve(__dirname, 'package.json')
    }
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test:  /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css-loader?sourceMap',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')],
              sourceMap: true
            }
          }
        ]),
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
  ]
}