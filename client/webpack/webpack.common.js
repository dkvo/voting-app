const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const SRC_URL = path.resolve(__dirname, '../index.js');
const DEST_URL = path.resolve(__dirname, '../dist');
const HTML_URL = path.resolve(__dirname, '../public/index.html');
const ASSETS_URL = '/assets/media';
const ROOT_URL = path.resolve(__dirname, '../');


module.exports = {
    entry: {
        app: SRC_URL
    },
    plugins: [
        new CleanWebpackPlugin(DEST_URL, {
            root: ROOT_URL,
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: 'Voting App',
            template: HTML_URL
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jxs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:  path.join(ASSETS_URL,'/images/[name].[ext]'),
                    }
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: path.join(ASSETS_URL, '/fonts/[name].[ext]'),
                  },
                },
              },
        ]
    },
    output: {
        filename: 'assets/js/bundle.js',
        path: DEST_URL,
        publicPath: '/'
    },

}