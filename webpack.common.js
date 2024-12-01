const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './public/js/index.js',
    output: {
        filename: 'main.[contenthash].js',
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
            template: './public/404.html',
            filename: '404.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/disclaimer.html',
            filename: 'disclaimer.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/privacy-policy.html',
            filename: 'privacy-policy.html',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/404.html',
            filename: '404.html',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/contact.html',
            filename: 'contact.html',
        }),
        // Widget Sites
        new HtmlWebpackPlugin({
            template: './public/widgets/mortgage-widget.html',
            filename: 'mortgage-widget.html',
        }),            
    ],
};
