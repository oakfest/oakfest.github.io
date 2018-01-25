const path = require('path');
const webpack = require("webpack");

const MinifyPlugin = require("babel-minify-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.resolve(__dirname, 'assets/dist');


module.exports = function (env) {
    return {
        entry: {
            'oak.min': './src/js/index.js'
        },

        output: {
            filename: '[name].[chunkhash].js',
            path: dist
        },

        plugins: [
            new CleanWebpackPlugin(['dist'], {
                root: __dirname + '/assets'
            }),
            new ManifestPlugin(),
            new MinifyPlugin({}, {
                test: /\.min\./,
            }),
            new HtmlWebpackPlugin({
              filename: __dirname + '/index.html',
	      template: __dirname + '/src/index.ejs'
            })
        ]
    }
};
