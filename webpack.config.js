var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context : __dirname,
    entry: {
        path: path.resolve(__dirname, './src/app/index.jsx'),
        vendors: ['react']
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'
            },
            {
                test: /\.(svg)$/,
                loader: 'file-loader?name=./images/[name].[ext]',
                include: /images/
            },
            {
                test: /\.less$/,
                loader: "style!css!less",
                include: /node_modules/
            },
            {
                test: /\.(otf|ttf|eot|svg|woff|woff2)(\?\S*)?$/,
                loader: "file-loader?name=./font/[name]-[hash].[ext]",
                include: /font/
            }
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.scss', '.less', '.json']
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};