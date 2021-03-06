var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                presets: ['react', 'es2015'],
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wp-content/themes/react/'),
        publicPath: '/wp-content/themes/react/'
    }
};