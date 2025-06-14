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
        chunks: ['main', 'index-pages', 'footer', 'utils'], // Include relevant chunks
        canonical: 'https://www.monvvo.com',
    },
    // Mortgage Section Pages
    {
        filename: 'mortgage/index.html',
        template: path.resolve(__dirname, 'public/mortgage/index.html'),
        chunks: ['main', 'index-pages', 'footer', 'utils'], // Exclude unnecessary chunks
        canonical: 'https://www.monvvo.com/mortgage/',
    }, {
        filename: 'mortgage/mortgage-calculator.html',
        template: path.resolve(__dirname, 'public/mortgage/mortgage-calculator.html'),
        chunks: ['main', 'mortgage-calculator', 'generalCalcs', 'footer','utils'], // Exclude unnecessary chunks
        canonical: 'https://www.monvvo.com/mortgage/mortgage-calculator',
    }, {
        filename: 'mortgage/home-affordability-calculator.html',
        template: path.resolve(__dirname, 'public/mortgage/home-affordability-calculator.html'),
        chunks: ['main', 'home-affordability-calculator', 'generalCalcs', 'footer','utils'], // Exclude unnecessary chunks
        canonical: 'https://www.monvvo.com/mortgage/home-affordability-calculator',
    },
    //   {
    //     filename: 'mortgage/down-payment-calculator.html',
    //     template: path.resolve(__dirname, 'public/mortgage/down-payment-calculator.html'),
    //     chunks: ['main', 'down-payment-calculator', 'generalCalcs', 'footer', 'utils'], // Exclude unnecessary chunks
    //     canonical: 'https://www.monvvo.com/mortgage/down-payment-calculator',
    // }, 


    // Legal Pages
    {
        filename: 'disclaimer/index.html',
        template: path.resolve(__dirname, 'public/disclaimer/index.html'),
        chunks: ['main', 'legal', 'footer', 'utils'], // Exclude unnecessary chunks
        canonical: 'https://www.monvvo.com/disclaimer/',
    },
    {
        filename: 'privacy-policy/index.html',
        template: path.resolve(__dirname, 'public/privacy-policy/index.html'),
        chunks: ['main', 'legal', 'footer', 'utils'],
        canonical: 'https://www.monvvo.com/privacy-policy/',
    },
    
    // Widget Pages
    {
        filename: 'mortgage-widget.html',
        template: path.resolve(__dirname, 'public/widgets/mortgage-widget.html'),
        chunks: ['main', 'footer', 'utils'], // Exclude calculator-specific scripts
        canonical: 'https://www.monvvo.com/widgets/mortgage-widget',
    },
    {
        filename: 'home-affordability-widget.html',
        template: path.resolve(__dirname, 'public/widgets/home-affordability-widget.html'),
        chunks: ['main', 'footer', 'utils'], // Exclude calculator-specific scripts
        canonical: 'https://www.monvvo.com/widgets/home-affordability-widget',
    },
    {
        filename: '404.html',
        template: path.resolve(__dirname, 'public/404.html'),
        chunks: ['main'], // Minimal or no chunks
        canonical: 'https://www.monvvo.com/404',
    },
    {
        filename: 'contact/index.html',
        template: path.resolve(__dirname, 'public/contact/index.html'),
        chunks: ['main', 'contact', 'footer', 'utils'],
        canonical: 'https://www.monvvo.com/contact/',
    },
];

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        main: './public/js/index.js', // Main entry point
        // General JS
        generalCalcs: './public/js/generalCalcs.js',
        // Mortgage Calculator JS & CSS
        'mortgage-calculator': './public/js/mortgage-calculator.js',
        // Home Affordability Calculator JS & CSS
        'home-affordability-calculator': './public/js/home-affordability-calculator.js',
        // Down Payment Calculator JS & CSS
        'down-payment-calculator': './public/js/down-payment-calculator.js',
        // Contact JS & CSS
        contact: './public/js/contact.js',
        // Utils JS & CSS
        utils: './public/js/utils.js',
        // Index Page js & CSS
        'index-pages': './public/js/index-pages.js',
        // Index Page js & CSS
        'article': './public/js/article.js',
        // Legal js & CSS
        'legal': './public/js/legal.js',
        // Footer JS & CSS
        'footer': './public/js/footer.js',
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
                // Existing styles cache group
                styles: {
                    name: false,
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
                // { from: /^\/widgets\/mortgage-widget$/, to: '/widgets/mortgage-widget.html' },
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