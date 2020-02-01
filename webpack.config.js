const path = require('path');
const webpack = require("webpack");

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.resolve(__dirname, 'assets/dist');
const sponsors = require('./sponsor-list');

const pages = [
    'sponsors',
    'faqs'
];

module.exports = function (env) {
    return {
        entry: {
            'oak.min': './src/js/index.js'
        },

        output: {
            filename: '[name].[chunkhash].js',
            path: dist,
            publicPath: '/assets/dist/'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|assets)/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            "presets": ["@babel/preset-env"]
                        }
                    }
                },
                {
                    test: /\.s?[a|c]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg|woff|woff2|webp)$/,
                    use: [
                        {
                            loader: 'file-loader',
                        }
                    ]
                }
            ]
        },

        resolve: {
            alias: {}
        },

        plugins: [
            new CleanWebpackPlugin({
                dry: true,
                cleanOnceBeforeBuildPatterns: ['assets/dist'].concat(pages)
            }),
            new ManifestPlugin(),
            new HtmlWebpackPlugin({
                filename: __dirname + '/index.html',
                template: __dirname + '/src/index.ejs',
                loader: 'ejs-loader'
            })
        ].concat(pages.map(page => {

            // generate static page folders for fancy urls
            return new HtmlWebpackPlugin({
                filename: __dirname + '/' + page + '/index.html',
                template: __dirname + '/src/' + page + '.ejs',
                sponsors: sponsors
            })
        }))
    };
};
