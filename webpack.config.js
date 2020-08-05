var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",

    plugins: [new HtmlWebpackPlugin({
        template: __dirname + '/static/template.html',
        favicon: __dirname + '/static/favicon.png',
        filename: 'index.html',
        inject: 'body'
    })],

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", "scss", "jpg"]
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }
        ]
    }
};