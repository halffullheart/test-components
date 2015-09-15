var webpack = require('webpack');

module.exports = {
  entry: {
    'test-components': './index.js'
  },
  output: {
    path: './dist',
    filename: 'test-components.js',
    library: 'TestComponents',
    libraryTarget: 'var'
  },
  module: {
    loaders: [
      { test: /\.jsx$/,  loader: 'jsx-loader' }
    ]
  },
  externals: {
    'react': 'React'
  }
};
