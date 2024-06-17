const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './public/js/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext][query]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/privacy-policy.html',
            filename: 'privacy-policy.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/monvvo-disclaimer.html',
            filename: 'monvvo-disclaimer.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/404.html',
            filename: '404.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/img', to: 'img' },
                { from: 'public/css', to: 'css' },
                { from: 'public/Knowledge-Center', to: 'Knowledge-Center' },
                { from: 'public/sitemap.xml', to: 'sitemap.xml' },
                { from: 'public/ads.txt', to: 'ads.txt' },
            ],
        }),
    ],
};
