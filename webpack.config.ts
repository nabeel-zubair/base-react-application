const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-typescript", "@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            },
            {
                test: /\.s[ac]ss|css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ["url-loader"]
            }
        ]
    },
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", "css"] },
    devServer: { port: 3001 },
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })]
}