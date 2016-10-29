var path = require('path');
var webpack = require("webpack");
module.exports = {
  entry: {
    app: ["./src/entry.js"]
  },
  output: {
    path: path.resolve(__dirname,"..", "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ['babel'],
        test: /\.js$/,

      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      minimize: true
    }),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
    new webpack.optimize.DedupePlugin()
  ]
};
