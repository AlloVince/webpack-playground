const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin("[name].css?[hash]");

module.exports = {
  mode: 'development',
  entry: {
    vendor: [
      'antd',
      'react',
      'react-dom'
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].dll.js',
    library: '[name]' //VERY IMPORTANT!!
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
    new webpack.DllPlugin({
      context: __dirname,
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]'
    }),
    extractCSS
  ],
  devtool: 'source-map'
};

