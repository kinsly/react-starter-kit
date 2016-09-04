var path = require('path');

module.exports = {
  devtool: 'source-map', //for development
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
};
