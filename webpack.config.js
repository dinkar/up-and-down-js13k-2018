const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const KONTRA = [
    'core.js',
    'assets.js',
    'sprite.js',
    'gameLoop.js',
    'keyboard.js'
];

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyWebpackPlugin([
            ...KONTRA.map(file => {return { from: './node_modules/kontra/dist/' + file, to: file };}),
            { from: './src/style.css', to: 'style.css' }
        ]),
        new HtmlWebpackIncludeAssetsPlugin({ assets: [
            ...KONTRA
        ], append: false })
    ]
};