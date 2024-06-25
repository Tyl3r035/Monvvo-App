const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/404.html',
            filename: '404.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/privacy-policy.html',
            filename: 'privacy-policy.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/monvvo-disclaimer.html',
            filename: 'monvvo-disclaimer.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/investment/compound-interest-calculator.html',
            filename: 'investment/compound-interest-calculator.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/investment/investment-growth-calculator.html',
            filename: 'investment/investment-growth-calculator.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/investment/retirement-savings-calculator.html',
            filename: 'investment/retirement-savings-calculator.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/knowledge-center/how-to-calculate-mortgage-blog.html',
            filename: 'knowledge-center/how-to-calculate-mortgage-blog.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/knowledge-center/mortgage-calculator-make-informed-home-loan-decisions.html',
            filename: 'knowledge-center/mortgage-calculator-make-informed-home-loan-decisions.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/loan/auto-loan-calculator.html',
            filename: 'loan/auto-loan-calculator.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/loan/loan-amortization-calculator.html',
            filename: 'loan/loan-amortization-calculator.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/loan/personal-loan-calculator.html',
            filename: 'loan/personal-loan-calculator.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/loan/student-loan-calculator.html',
            filename: 'loan/student-loan-calculator.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/mortgage/down-payment-calculator.html',
            filename: 'mortgage/down-payment-calculator.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/mortgage/home-equity-calculator.html',
            filename: 'mortgage/home-equity-calculator.html',
        }),
        new HtmlWebpackPlugin({
            template: './public/mortgage/Mortgage-Payoff-Calculator.html',
            filename: 'mortgage/Mortgage-Payoff-Calculator.html',
        }),
    ],
};
