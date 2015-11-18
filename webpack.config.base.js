'use strict';

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'stage-0'
          ]
        }
      }
    ]
  },
  outputs: [
    {
      library: 'Redux',
      libraryTarget: 'umd'
    },
    {
      path: __dirname + "/lib",
      filename: "bundle.js"
    }
  ],
  resolve: {
    extensions: ['', '.js']
  }
};
