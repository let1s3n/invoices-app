const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  mode:'production',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
});