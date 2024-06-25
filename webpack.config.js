const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// Add new files and folder here
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
        filename: 'knowledge-center/how-to-calculate-mortgage-blog.html',
        template: path.resolve(__dirname, 'public/knowledge-center/how-to-calculate-mortgage-blog.html'),
        canonical: 'https://monvvo.com/knowledge-center/how-to-calculate-mortgage-blog'
    },
    {
        filename: 'knowledge-center/mortgage-calculator-make-informed-home-loan-decisions.html',
        template: path.resolve(__dirname, 'public/knowledge-center/mortgage-calculator-make-informed-home-loan-decisions.html'),
        canonical: 'https://monvvo.com/knowledge-center/mortgage-calculator-make-informed-home-loan-decisions'
    },
    {
        filename: 'mortgage/down-payment-calculator.html',
        template: path.resolve(__dirname, 'public/mortgage/down-payment-calculator.html'),
        canonical: 'https://monvvo.com/mortgage/down-payment-calculator'
    },
    {
        filename: 'mortgage/home-equity-calculator.html',
        template: path.resolve(__dirname, 'public/mortgage/home-equity-calculator.html'),
        canonical: 'https://monvvo.com/mortgage/home-equity-calculator'
    },
    {
        filename: 'mortgage/mortgage-payoff-calculator.html',
        template: path.resolve(__dirname, 'public/mortgage/mortgage-payoff-calculator.html'),
        canonical: 'https://monvvo.com/mortgage/mortgage-payoff-calculator'
    },
    {
        filename: 'loan/auto-loan-calculator.html',
        template: path.resolve(__dirname, 'public/Loan/Auto-Loan-Calculator.html'),
        canonical: 'https://monvvo.com/loan/auto-loan-calculator'
    },
    {
        filename: 'loan/personal-loan-calculator.html',
        template: path.resolve(__dirname, 'public/loan/personal-loan-calculator.html'),
        canonical: 'https://monvvo.com/loan/personal-loan-calculator'
    },
    {
        filename: 'loan/student-loan-calculator.html',
        template: path.resolve(__dirname, 'public/loan/student-loan-calculator.html'),
        canonical: 'https://monvvo.com/loan/student-loan-calculator'
    },
    {
        filename: 'investment/retirement-savings-calculator.html',
        template: path.resolve(__dirname, 'public/investment/retirement-savings-calculator.html'),
        canonical: 'https://monvvo.com/investment/retirement-savings-calculator'
    },
    {
        filename: 'investment/investment-growth-calculator.html',
        template: path.resolve(__dirname, 'public/investment/investment-growth-calculator.html'),
        canonical: 'https://monvvo.com/investment/investment-growth-calculator'
    },
    {
        filename: 'investment/compound-interest-calculator.html',
        template: path.resolve(__dirname, 'public/investment/compound-interest-calculator.html'),
        canonical: 'https://monvvo.com/investment/compound-interest-calculator'
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
                { from: 'public/js/service-worker.js', to: 'service-worker.js' },
                // Copy _headers and _redirects to dist
                { from: '_headers', to: '_headers', toType: 'file' },
                { from: '_redirects', to: '_redirects', toType: 'file' },
                // Copy sitemap.xml to dist
                { from: 'public/sitemap.xml', to: 'sitemap.xml', toType: 'file' },
                // Copy ads.txt to dist
                { from: 'ads.txt', to: 'ads.txt', toType: 'file' },
                // Copy robots.txt to dist
                { from: 'robots.txt', to: 'robots.txt', toType: 'file'}
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
