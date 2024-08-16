const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Use consistent casing

module.exports = {
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
