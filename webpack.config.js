const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './public/js/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/404.html'),
            filename: '404.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/privacy-policy.html'),
            filename: 'privacy-policy.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/monvvo-disclaimer.html'),
            filename: 'monvvo-disclaimer.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/img', to: 'img' },
                { from: 'public/css', to: 'css' },
                { from: 'public/Knowledge-Center', to: 'Knowledge-Center' },
                { from: 'public/Mortgage', to: 'Mortgage' },
                { from: 'public/js/service-worker.js', to: 'service-worker.js' },
                // Add these lines to copy _headers and _redirects
                { from: '_headers', to: '_headers', toType: 'file' },
                { from: '_redirects', to: '_redirects', toType: 'file' }
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000,
        open: true,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/index.html' },
                { from: /./, to: '/404.html' }
            ]
        },
        watchFiles: ['public/**/*'],
        client: {
            logging: 'info',
        }
    },
    stats: {
        children: true
    }
};
