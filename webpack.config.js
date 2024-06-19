const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const pages = [
    {
        filename: 'index.html',
        template: path.resolve(__dirname, 'public/index.html'),
        canonical: 'https://monvvo.com/'
    },
    {
        filename: 'privacy-policy.html',
        template: path.resolve(__dirname, 'public/privacy-policy.html'),
        canonical: 'https://monvvo.com/privacy-policy'
    },
    {
        filename: 'monvvo-disclaimer.html',
        template: path.resolve(__dirname, 'public/monvvo-disclaimer.html'),
        canonical: 'https://monvvo.com/monvvo-disclaimer'
    },
    {
        filename: 'Knowledge-Center/how-to-calculate-mortgage-blog.html',
        template: path.resolve(__dirname, 'public/Knowledge-Center/how-to-calculate-mortgage-blog.html'),
        canonical: 'https://monvvo.com/knowledge-center/how-to-calculate-mortgage-blog'
    },
    {
        filename: 'Mortgage/index.html',
        template: path.resolve(__dirname, 'public/Mortgage/index.html'),
        canonical: 'https://monvvo.com/mortgage'
    },
    {
        filename: 'Loan/index.html',
        template: path.resolve(__dirname, 'public/Loan/index.html'),
        canonical: 'https://monvvo.com/loan'
    }
];

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
        ...pages.map(page => new HtmlWebpackPlugin({
            filename: page.filename,
            template: page.template,
            inject: 'body',
            minify: true,
            canonical: page.canonical
        })),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/img', to: 'img' },
                { from: 'public/css', to: 'css' },
                { from: 'public/Knowledge-Center', to: 'Knowledge-Center' },
                { from: 'public/Mortgage', to: 'Mortgage' },
                { from: 'public/Loan', to: 'Loan' },
                { from: 'public/js/service-worker.js', to: 'service-worker.js' },
                // Copy _headers and _redirects to dist
                { from: '_headers', to: '_headers', toType: 'file' },
                { from: '_redirects', to: '_redirects', toType: 'file' },
                // Copy sitemap.xml to dist
                { from: 'public/sitemap.xml', to: 'sitemap.xml', toType: 'file' },
                // Copy ads.txt to dist
                { from: 'ads.txt', to: 'ads.txt', toType: 'file' }
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
