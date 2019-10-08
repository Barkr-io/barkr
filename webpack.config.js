const path = require('path')
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
    
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            query: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        }],
    },
    mode: "development",
    plugins : [
        new HtmlWebpackPlugin ({
            template : './views/index.html'
        })
    ],
    devServer: {
        port: 8080,
  
    }
};