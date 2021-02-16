'use strict';

const webpack = require('webpack');

module.exports = {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {'NODE_ENV': "'production'"}
        }),
    ],
    optimization: {
        minimize: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    }
};