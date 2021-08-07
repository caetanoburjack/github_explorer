const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') //Available on https://github.com/pmmmwh/react-refresh-webpack-plugin

const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,//It is necessary to use ReactRefreshWebpackPlugin
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(), //To use only in development envirnoment 
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, 'public', 'index.html')
            }
        )
    ].filter(Boolean),//Hack to return only what is not null, false, 0 or similar thing (ReactRefreshWebpackPlugin)
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                // use: 'babel-loader',// configuration BEFORE ReactRefreshWebpackPlugin
                use: {// configuration AFTER ReactRefreshWebpackPlugin
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
}