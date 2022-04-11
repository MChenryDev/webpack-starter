const HtmlWebPack    = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");



module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false 
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [{ loader: 'style-loader'}, {loader: 'css-loader'}]
            },
            {
                test: /styles.css$/,
                use: [ {loader: MiniCssExtract.loader}, 'css-loader' ]

            },
            {
                test: /\.(png|jpe?g|gif)$/,
                type: 'asset/resource'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebPack({
            title: 'Mi Webpack App',
            // filename: 'index.html'
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false,
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/'} 
            ]
        })   
    ]
}