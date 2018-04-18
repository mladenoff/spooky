/* eslint "no-var": 0 */
/* eslint "comma-dangle": 0 */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development


var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new UglifyJsPlugin({
    sourceMap: true,
    uglifyOptions: {
      compress: {
        warnings: true
      }
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);


module.exports = {
  mode: mode,
  context: __dirname,
  entry: './frontend/spooky.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
