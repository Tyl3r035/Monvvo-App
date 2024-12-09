
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


const isProduction = process.env.NODE_ENV === 'production';

// Define pages with templates and chunks
const pages = [
    {
        filename: 'index.html',
        template: path.resolve(__dirname, 'public/index.html'),
        chunks: ['main', 'mortgage-calculator', 'generalCalcs', 'utils'], // Include relevant chunks
        canonical: 'https://www.monvvo.com',
    },
    {
        filename: 'loan-calculator.html',
        template: path.resolve(__dirname, 'public/loan-calculator.html'),
        chunks: ['main', 'loan-calculator', 'generalCalcs','utils'], // Exclude unnecessary chunks
        canonical: 'https://www.monvvo.com/loan-calculator',
    },
    {
        filename: 'disclaimer.html',
        template: path.resolve(__dirname, 'public/disclaimer.html'),
        chunks: ['main', 'utils'], // Exclude unnecessary chunks
        canonical: 'https://www.monvvo.com/disclaimer',
    },
    {
        filename: 'privacy-policy.html',
        template: path.resolve(__dirname, 'public/privacy-policy.html'),
        chunks: ['main', 'utils'],
        canonical: 'https://www.monvvo.com/privacy-policy',
    },
    {
        filename: 'mortgage-widget.html',
        template: path.resolve(__dirname, 'public/widgets/mortgage-widget.html'),
        chunks: ['main', 'utils'], // Exclude calculator-specific scripts
        canonical: 'https://www.monvvo.com/widgets/mortgage-widget',
    },
    {
        filename: '404.html',
        template: path.resolve(__dirname, 'public/404.html'),
        chunks: ['main'], // Minimal or no chunks
        canonical: 'https://www.monvvo.com/404',
    },
    {
        filename: 'contact.html',
        template: path.resolve(__dirname, 'public/contact.html'),
        chunks: ['main', 'contact', 'utils'],
        canonical: 'https://www.monvvo.com/contact',
    },
];

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        main: './public/js/index.js', // Main entry point
        // General JS
        generalCalcs: './public/js/generalCalcs.js',
        // Mortgage Calculator JS
        'mortgage-calculator': './public/js/mortgage-calculator.js',
        // Loan Calculator JS
        'loan-calculator': './public/js/loan-calculator.js',
        // Contact JS
        contact: './public/js/contact.js',
        // Utils JS
        utils: './public/js/utils.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
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
                // exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...pages.map(page => new HtmlWebpackPlugin({
            filename: page.filename,
            template: page.template,
            inject: true, // Ensure CSS/JS is injected properly
            chunks: page.chunks, // Include only relevant chunks
            minify: isProduction,
            canonical: page.canonical,
        })),
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', // Ensure CSS is hashed for cache busting
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/img', to: 'img' },
                { from: 'public/css', to: 'css' },
                { from: 'public/js', to: 'js' },
                { from: 'public/js/service-worker.js', to: 'service-worker.js' },
                { from: 'public/widgets', to: 'widgets' },
                { from: '_headers', to: '_headers', toType: 'file' },
                { from: '_redirects', to: '_redirects', toType: 'file' },
                { from: 'public/sitemap.xml', to: 'sitemap.xml', toType: 'file' },
                { from: 'ads.txt', to: 'ads.txt', toType: 'file' },
                { from: 'robots.txt', to: 'robots.txt', toType: 'file' },
            ],
        }),
    ],

    optimization: {
        // minimize: isProduction,
        minimize: false,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: isProduction,
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                // Existing styles cache group
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
                // New cache group for jsPDF and related libraries
                jsPDFVendor: {
                    test: /[\\/]node_modules[\\/](jspdf|jspdf-autotable|fflate)[\\/]/,
                    name: 'jspdf',
                    chunks: 'all',
                },
                // Additional cache group for shared vendor libraries
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -10,
                },
            },
        },
    },    
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: {
            rewrites: [
                { from: /^\/widgets\/mortgage-widget$/, to: '/widgets/mortgage-widget.html' },
                { from: /./, to: '/404.html' },
            ],
        },
        watchFiles: ['public/**/*'],
        client: {
            logging: 'info',
        },
    },
    stats: {
        children: true,
    },
};
