var HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/build/index.html',
  filename: 'index.html',
  inject: 'body'
});

var config = {
    entry: [__dirname + '/app/main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: [
              path.resolve(__dirname, "app")
            ],
            exclude: [
              path.resolve(__dirname, "node_modules")
            ],
            loader: 'babel-loader',
            options: {
                presets: ['react']
            }
          }
      ]
    },
    devtool: "source-map",
    context: __dirname,
    plugins: [
      HTMLWebpackPluginConfig
    ],
};


module.exports = config;
