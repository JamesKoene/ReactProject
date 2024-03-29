const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "/dist/");

module.exports = {
  
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test:/\.(s*)css$/, 
        use:['style-loader','css-loader','sass-loader'],       
      }
    ]
  },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 3000
  },
  mode: "development"
};