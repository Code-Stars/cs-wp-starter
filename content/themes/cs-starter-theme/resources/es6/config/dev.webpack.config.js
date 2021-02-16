'use strict';

const path = require('path');

const config = {
    theme_path: './content/themes/cs-starter-theme/',
    js_path: 'assets/js/',
    es6_path: 'resources/es6'
};

module.exports = {
    mode: 'development',
    entry: [
        'babel-polyfill', // so we can use await
        config.theme_path + config.es6_path + '/App.js'
    ],
    output: {
        path: path.resolve(__dirname, config.theme_path + config.js_path + 'dist/'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    }
};
