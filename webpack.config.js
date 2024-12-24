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
        chunks: ['main', 'mortgage-calculator', 'generalCalcs', 'utils'],
        canonical: 'https://www.monvvo.com',
    },
    {
        filename: 'loan-calculator.html',
        template: path.resolve(__dirname, 'public/loan-calculator.html'),
        chunks: ['main', 'loan-calculator', 'generalCalcs', 'utils'],
        canonical: 'https://www.monvvo.com/loan-calculator',
    },
    {
        filename: 'disclaimer.html',
        template: path.resolve(__dirname, 'public/disclaimer.html'),
        chunks: ['main', 'utils'],
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
        chunks: ['main', 'utils'],
        canonical: 'https://www.monvvo.com/widgets/mortgage-widget',
    },
    {
        filename: 'private-mortgage-insurance.html',
        template: path.resolve(__dirname, 'public/articles/mortgage/private-mortgage-insurance.html'),
        chunks: ['main', 'utils'],
        canonical: 'https://www.monvvo.com/articles/mortgage/private-mortgage-insurance',
        templateParameters: {
            publicPath: '/articles/mortgage/', // Custom publicPath
        },
    },
    
    {
        filename: '404.html',
        template: path.resolve(__dirname, 'public/404.html'),
        chunks: ['main'],
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
        main: './public/js/index.js',
        generalCalcs: './public/js/generalCalcs.js',
        'mortgage-calculator': './public/js/mortgage-calculator.js',
        'loan-calculator': './public/js/loan-calculator.js',
        contact: './public/js/contact.js',
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
            inject: true,
            chunks: page.chunks,
            minify: isProduction,
            canonical: page.canonical,
            templateParameters: {
                publicPath: page.templateParameters?.publicPath || '/', // Pass the custom publicPath
            },
        })),
        
        
        


        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'public/img'), to: 'img' },
                { from: path.resolve(__dirname, 'public/css'), to: 'css' },
                { from: path.resolve(__dirname, 'public/js'), to: 'js' },
                { from: path.resolve(__dirname, 'public/js/service-worker.js'), to: 'service-worker.js' },
                { from: path.resolve(__dirname, 'public/widgets'), to: 'widgets' },
                {
                    from: path.resolve(__dirname, 'public/articles'),
                    to: 'articles',
                    globOptions: {
                        ignore: [], // Allow all files
                    },
                    noErrorOnMissing: true,
                },                
                { from: path.resolve(__dirname, '_headers'), to: '_headers', toType: 'file' },
                { from: path.resolve(__dirname, '_redirects'), to: '_redirects', toType: 'file' },
                { from: path.resolve(__dirname, 'public/sitemap.xml'), to: 'sitemap.xml', toType: 'file' },
                { from: path.resolve(__dirname, 'ads.txt'), to: 'ads.txt', toType: 'file' },
                { from: path.resolve(__dirname, 'robots.txt'), to: 'robots.txt', toType: 'file' },
            ],
        }),
    ],
    optimization: {
        minimize: isProduction,
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
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
                jsPDFVendor: {
                    test: /[\\/]node_modules[\\/](jspdf|jspdf-autotable|fflate)[\\/]/,
                    name: 'jspdf',
                    chunks: 'all',
                },
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
