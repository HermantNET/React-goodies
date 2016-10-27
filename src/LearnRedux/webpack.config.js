"use strict";

module.exports = {
    entry: "./App/app.jsx",
    output: {
        filename: "./wwwroot/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel",
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    exclude: /node_modules/
};