
const HtmlWebPack = require('html-webpack-plugin');
const { Template } = require('webpack');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const Terser = require("terser-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin")

module.exports = {
    mode: "production",

    output : {
        clean : true,
        filename : 'main.[fullhash].js',
    },

    module : {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources : false
                }
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /style.css$/,
                use: [MiniCssExtract.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader:'file-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },

    optimization: {
        minimize : true,
        minimizer : [
            new Terser(),
            new CssMinimizer(),
        ]

    },

    plugins : [
        new HtmlWebPack({
            title : 'Mi webpack app',
            filename : 'index.html',
            template : './src/index.html'
        }),
        new MiniCssExtract({
            filename : '[name].[fullhash].css',
            ignoreOrder : false,
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" },
            ],
          }),
    ],
}