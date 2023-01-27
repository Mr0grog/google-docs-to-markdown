'use strict';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv.toLocaleLowerCase() === 'production';

const commonTargetConfig = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'inline-source-map',
}

const nodeTargetConfig = {
  ...commonTargetConfig,
  entry: './index.node.js',
  target: 'node',
  output: {
    filename: 'bundle.node.js'
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /canvas/, contextRegExp: /jsdom$/ })
  ]
}

const webTargetConfig = {
  ...commonTargetConfig,
  entry: './index.js',
  output: {
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
}

module.exports = [nodeTargetConfig, webTargetConfig]
