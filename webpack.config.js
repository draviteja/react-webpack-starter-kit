var HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var config = {
    entry: [__dirname + '/app/main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
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
                presets: ['env','react']
            }
          },
          {
            test:/\.css$/,
            use:[
              'style-loader',
              'css-loader'
            ]
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
