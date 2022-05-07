const path = require("path");

module.exports = {
  output: {
    filename: "bundle.js",
  },
  entry: "./src/js/main.js",
  module: {
    rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },       
    ],
  },
  devServer: {
      contentBase:  __dirname,
      compress: true,
      port: 9000
  }
};
