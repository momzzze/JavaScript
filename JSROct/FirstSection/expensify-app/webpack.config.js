const path = require('path');
//playground/redux-expensify.js'
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: 'style-loader'
    }, {
      test: /\.s?css$/,
      use: 'css-loader'
    }, {
      test: /\.s?css$/,
      use: 'sass-loader'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
