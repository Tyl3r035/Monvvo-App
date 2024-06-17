// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './public/js/index.js',
        ads: './public/js/ads.js'
    },
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
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext][query]',
                },
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            inject: 'body',
            chunks: ['main', 'ads']
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
                { from: path.resolve(__dirname, 'public/img'), to: 'img' },
                { from: path.resolve(__dirname, 'public/css'), to: 'css' },
                { from: path.resolve(__dirname, 'public/Knowledge-Center'), to: 'Knowledge-Center', globOptions: {
                    ignore: ['**/privacy-policy.html', '**/monvvo-disclaimer.html']
                }},
                { from: path.resolve(__dirname, 'public/js/service-worker.js'), to: 'service-worker.js' },
                { from: path.resolve(__dirname, 'public/sitemap.xml'), to: 'sitemap.xml' },
                { from: path.resolve(__dirname, 'public/ads.txt'), to: 'ads.txt' }
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
                { from: /404/, to: '/404.html' },
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
