const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
    { template: './public/index.html', filename: 'index.html' },
    { template: './public/404.html', filename: '404.html' },
    { template: './public/privacy-policy.html', filename: 'privacy-policy.html' },
    { template: './public/monvvo-disclaimer.html', filename: 'monvvo-disclaimer.html' },
    { template: './public/knowledge-center/how-to-calculate-mortgage-blog.html', filename: 'knowledge-center/how-to-calculate-mortgage-blog.html' },
    { template: './public/knowledge-center/mortgage-calculator-make-informed-home-loan-decisions.html', filename: 'knowledge-center/mortgage-calculator-make-informed-home-loan-decisions.html' },
    { template: './public/mortgage/down-payment-calculator.html', filename: 'mortgage/down-payment-calculator.html' },
    { template: './public/mortgage/home-equity-calculator.html', filename: 'mortgage/home-equity-calculator.html' },
    { template: './public/mortgage/mortgage-payoff-calculator.html', filename: 'mortgage/mortgage-payoff-calculator.html' },
    { template: './public/loan/auto-loan-calculator.html', filename: 'loan/auto-loan-calculator.html' },
    { template: './public/loan/loan-amortization-calculator.html', filename: 'loan/loan-amortization-calculator.html' },
    { template: './public/loan/personal-loan-calculator.html', filename: 'loan/personal-loan-calculator.html' },
    { template: './public/loan/student-loan-calculator.html', filename: 'loan/student-loan-calculator.html' },
    { template: './public/investment/retirement-savings-calculator.html', filename: 'investment/retirement-savings-calculator.html' },
    { template: './public/investment/investment-growth-calculator.html', filename: 'investment/investment-growth-calculator.html' },
    { template: './public/investment/compound-interest-calculator.html', filename: 'investment/compound-interest-calculator.html' }
];

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
        ...pages.map(page => new HtmlWebpackPlugin({
            template: page.template,
            filename: page.filename,
        })),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '_headers'), to: '_headers', toType: 'file' },
                { from: path.resolve(__dirname, '_redirects'), to: '_redirects', toType: 'file' },
                { from: path.resolve(__dirname, 'ads.txt'), to: 'ads.txt', toType: 'file' },
                { from: path.resolve(__dirname, 'robots.txt'), to: 'robots.txt', toType: 'file' },
                { from: path.resolve(__dirname, 'public/sitemap.xml'), to: 'sitemap.xml', toType: 'file' },
            ],
        }),
    ],
};
