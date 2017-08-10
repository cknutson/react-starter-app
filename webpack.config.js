/*
 * ==================================================================
 * Copyright (c) 2017 Boeing. All Rights Reserved.
 * Printing, copying, reproducing or electronically transmitting this
 * software and its associated documentation in whole or in part, in
 * any form whatever, is subject to the terms of the Software License
 * Agreement by and between The Boeing Company and LICENSEE.
 * ==================================================================
 */

'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/client/app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react']
        },
      },{
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },{
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          { loader: 'url-loader' }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      inject: 'body'
    })
  ]
};
