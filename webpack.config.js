const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const  LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module:{
      rules:[
          {   test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
          },
          {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./src/favicon.ico",
            template: './src/index.html'}),
        new CopyPlugin({patterns: [{
                from: './src/assets',
                to: ''
            }]}),
        new LiveReloadPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
