const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin("[name].css?[hash]");

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
      },
      {
        test: /\.less$/,
        use: extractCSS.extract([
          // { loader: 'file-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ])
      }
    ]
  },
  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      inject: true,
      template: `${__dirname}/src/template.html`
    })
  ],
  // devtool: 'source-map'
};

