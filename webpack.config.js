'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');


const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv.toLocaleLowerCase() === 'production';

module.exports = {
  entry: './index.js',
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  output: {
    // TODO: this path is the default, it should be removable
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'index.html') }
      ]
    })
  ],
  devServer: {
    port: 9000,
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  }
};
