const webpack = require('webpack');
const path = require('path');
const resolve = require('resolve');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
  },
  target: 'node',
  externals: ((dir, isServer) => {
    const externals = [];

    if (!isServer) {
      return externals;
    }

    externals.push((context, request, callback) => {
      resolve(request, { basedir: dir, preserveSymlinks: true }, (err, res) => {
        if (err) {
          return callback();
        }

        // Webpack itself has to be compiled because it doesn't always use module relative paths
        if (res.match(/node_modules[/\\]next[/\\]dist[/\\]pages/)) {
          return callback();
        }

        if (res.match(/node_modules[/\\]webpack/)) {
          return callback();
        }

        if (res.match(/node_modules[/\\].*\.js/)) {
          return callback(null, `commonjs ${request}`);
        }

        callback();
      });
    });
    return externals;
  })(__dirname, true),

  module: {
    rules: [
      {
        test: /\.+(js|jsx)$/,
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
          { loader: 'css-loader' }
        ],
      }
    ]
  },
  devtool: 'source-map'
};

