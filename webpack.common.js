const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Define the pages with templates and filenames
const pages = [
    { template: './public/index.html', filename: 'index.html' },
    { template: './public/404.html', filename: '404.html' },
    { template: './public/disclaimer/index.html', filename: 'disclaimer.html' },
    { template: './public/privacy-policy/index.html', filename: 'privacy-policy.html' },
    { template: './public/contact/index.html', filename: 'contact.html' },
    { template: './public/widgets/mortgage-widget.html', filename: 'mortgage-widget.html' },
    { template: './public/mortgage/index.html', filename: 'mortgage/index.html' },
    { template: './public/auto/index.html', filename: 'auto/index.html' },
    { template: './public/mortgage/mortgage-calculator.html', filename: 'mortgage/mortgage-calculator.html' },
    { template: './public/mortgage/home-affordability-calculator.html', filename: 'mortgage/home-affordability-calculator.html'},
];

// Generate HtmlWebpackPlugin instances dynamically
const htmlPlugins = pages.map(
    (page) =>
        new HtmlWebpackPlugin({
            template: page.template,
            filename: page.filename,
        })
);

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
        ...htmlPlugins, // Spread the dynamically generated plugins
    ],
};
