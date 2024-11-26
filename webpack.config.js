const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

// Define pages with templates and paths
const pages = [
    {
        filename: 'index.html',
        template: path.resolve(__dirname, 'public/index.html'),
        chunks: ['mortgage-calculator', 'mortgagecalcs', 'utils'],
        canonical: 'https://www.monvvo.com'
    },
    {
        filename: 'disclaimer.html',
        template: path.resolve(__dirname, 'public/disclaimer.html'),
        chunks: ['mortgage-calculator', 'mortgagecalcs', 'utils'],
        canonical: 'https://www.monvvo.com/disclaimer'
    },

    // Add more pages as needed
];

module.exports = {
    mode: isProduction ? 'production' : 'development', // Automatically set mode
    entry: {
        main: './public/js/index.js',
        'mortgage-calculator': './public/js/mortgage-calculator.js',
        utils: './public/js/utils.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true, // Clears outdated assets
    },
    devtool: 'source-map', // Source maps for easier debugging
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
            {
                test: /\.js$/i,
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
            minify: isProduction, // Minify only in production
            canonical: page.canonical
        })),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/img', to: 'img' },
                { from: 'public/css', to: 'css' },
                { from: 'public/js', to: 'js' },
                { from: 'public/js/service-worker.js', to: 'service-worker.js' },
                { from: '_headers', to: '_headers', toType: 'file' },
                { from: '_redirects', to: '_redirects', toType: 'file' },
                { from: 'public/sitemap.xml', to: 'sitemap.xml', toType: 'file' },
                { from: 'ads.txt', to: 'ads.txt', toType: 'file' },
                { from: 'robots.txt', to: 'robots.txt', toType: 'file' }
            ]
        })
    ],
    optimization: {
        minimize: isProduction, // Minimize only in production
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: isProduction, // Drop console.logs in production only
                    },
                },
            }),
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
        hot: true, // Enable hot module replacement
        liveReload: true, // Automatically refresh on file changes
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
