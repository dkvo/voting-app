const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: "cheap-eval-source-map",
    devServer: {
        port: 3001,
        compress: true,
        open: true,
        contentBase: path.resolve(__dirname, '../dist/assets/media')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    }
});