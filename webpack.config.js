var config = {
    entry: [__dirname + '/app/main.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }]
    }
};


module.exports = config;
