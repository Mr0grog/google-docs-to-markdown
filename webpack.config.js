'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');


const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv.toLocaleLowerCase() === 'production';

module.exports = {
  entry: './index.js',
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'index.html') }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};

if (isProduction) {
  module.exports.plugins.push(
    new TerserPlugin({
      test: /\.js$/i,
      parallel: true,
      sourceMap: true
    })
  );
}
