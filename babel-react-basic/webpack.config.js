const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.html/,
        loader: 'file-loader?name=[name].[ext]',
      },
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
          // { loader: 'raw-loader' },
          { loader: 'css-loader' }
        ],
        // include: [
        //   path.resolve(__dirname, 'node_modules/highlight.js/styles/')
        // ],
        // exclude: /node_modules/,
      }
    ]
  },
  devtool: 'source-map'
};

