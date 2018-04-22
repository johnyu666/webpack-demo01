const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle1.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
       	test:/\.(png|gif|jpeg|jpg)/,
       	use:['file-loader']
       }
     ]
   },
   plugins: [
   new CleanWebpackPlugin(['dist']),
   new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ]
};