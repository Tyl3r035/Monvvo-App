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
        canonical: 'https://www.monvvo.com/'
    },
    {
        filename: 'privacy-policy.html',
        template: path.resolve(__dirname, 'public/privacy-policy.html'),
        canonical: 'https://www.monvvo.com/privacy-policy'
    },
    {
        filename: 'monvvo-disclaimer.html',
        template: path.resolve(__dirname, 'public/monvvo-disclaimer.html'),
        canonical: 'https://www.monvvo.com/monvvo-disclaimer'
    },
    {
        filename: 'Knowledge-Center/how-to-calculate-mortgage-blog.html',
        template: path.resolve(__dirname, 'public/Knowledge-Center/How-To-Calculate-Mortgage-Blog.html'),
        canonical: 'https://www.monvvo.com/knowledge-center/how-to-calculate-mortgage-blog'
    },
    {
        filename: 'Knowledge-Center/Mortgage-Calculator-Make-Informed-Home-Loan-Decisions.html',
        template: path.resolve(__dirname, 'public/Knowledge-Center/Mortgage-Calculator-Make-Informed-Home-Loan-Decisions.html'),
        canonical: 'https://www.monvvo.com/knowledge-center/mortgage-calculator-make-informed-home-loan-decisions'
    },
    {
        filename: 'Mortgage/Down-Payment-Calculator.html',
        template: path.resolve(__dirname, 'public/Mortgage/Down-Payment-Calculator.html'),
        canonical: 'https://www.monvvo.com/mortgage/down-payment-calculator'
    },
    {
        filename: 'Mortgage/Home-Equity-Calculator.html',
        template: path.resolve(__dirname, 'public/Mortgage/Home-Equity-Calculator.html'),
        canonical: 'https://www.monvvo.com/mortgage/home-equity-calculator'
    },
    {
        filename: 'Mortgage/Mortgage-Payoff-Calculator.html',
        template: path.resolve(__dirname, 'public/Mortgage/Mortgage-Payoff-Calculator.html'),
        canonical: 'https://www.monvvo.com/mortgage/mortgage-payoff-calculator'
    },
    {
        filename: 'Loan/Auto-Loan-Calculator.html',
        template: path.resolve(__dirname, 'public/Loan/Auto-Loan-Calculator.html'),
        canonical: 'https://www.monvvo.com/loan/auto-loan-calculator'
    },
    {
        filename: 'Loan/Personal-Loan-Calculator.html',
        template: path.resolve(__dirname, 'public/Loan/Personal-Loan-Calculator.html'),
        canonical: 'https://www.monvvo.com/loan/personal-loan-calculator'
    },
    {
        filename: 'Loan/Student-Loan-Calculator.html',
        template: path.resolve(__dirname, 'public/Loan/Student-Loan-Calculator.html'),
        canonical: 'https://www.monvvo.com/loan/student-loan-calculator'
    },
    {
        filename: 'Investment/Retirement-Savings-Calculator.html',
        template: path.resolve(__dirname, 'public/Investment/Retirement-Savings-Calculator.html'),
        canonical: 'https://www.monvvo.com/investment/retirement-savings-calculator'
    },
    {
        filename: 'Investment/Investment-Growth-Calculator.html',
        template: path.resolve(__dirname, 'public/Investment/Investment-Growth-Calculator.html'),
        canonical: 'https://www.monvvo.com/investment/investment-growth-calculator'
    },
    {
        filename: 'Investment/Compound-Interest-Calculator.html',
        template: path.resolve(__dirname, 'public/Investment/Compound-Interest-Calculator.html'),
        canonical: 'https://www.monvvo.com/investment/compound-interest-calculator'
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
