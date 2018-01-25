const path = require('path');
const webpack = require("webpack");

const MinifyPlugin = require("babel-minify-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dist = path.resolve(__dirname, 'assets/dist');


module.exports = function (env) {
    return {
        entry: {
            'oak.min': './src/js/index.js',
            'main': './src/css/main.scss'
        },

        output: {
            filename: '[name].[chunkhash].js',
            path: dist,
            publicPath: '/assets/dist/'
        },

        module: {

            rules: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        use: 'css-loader?-url'
                    })
                },
                {
                    test: /\.(sass|scss)$/,
                    loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },

        plugins: [
            new CleanWebpackPlugin(['dist'], {
                root: __dirname + '/assets'
            }),
            new ManifestPlugin(),
            new MinifyPlugin({}, {
                test: /\.min\./,
            }),
            new ExtractTextPlugin({
                filename: '[name].bundle.css',
                allChunks: true,
            }),
            new HtmlWebpackPlugin({
                filename: __dirname + '/index.html',
                template: __dirname + '/src/index.ejs'
            })
        ]
    }
};
