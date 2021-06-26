const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const path = require("path");

module.exports = merge(baseConfig, {
  mode:'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, "../node_modules/bootstrap"),
        ],
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  }
});