/*eslint-env node */
/*eslint-disable one-var, no-var, strict*/
"use strict";
var webpack =      require('webpack'),
    autoprefixer = require('autoprefixer-core'),
    HtmlPlugin =    require('html-webpack-plugin');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var envPlugin = new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
    },
});

var babelConfig = "babel?stage=0&optional=runtime";
var cssConfig = "css?localIdentName=[path][name]---[local]---[hash:base64:5]";

module.exports = {
    entry: ['webpack/hot/dev-server', './src/main.js'],
    output: {
        filename: "main.js",
        path: process.cwd() + "/dist",
        publicPath: "/",
    },
    module: {
        loaders: [
            {test: /\.css$/, loaders: ["style",cssConfig,"postcss"]},
            {test: /\.js$/, exclude: /node_modules/, loader: babelConfig},
            {test: /\.jsx$/, loaders: ["react-hot", babelConfig] },
            {test: /\.json$/, loader: "json-loader"},
        ],
    },
    postcss: {
        defaults: [autoprefixer],
    },
    plugins: [
        envPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            title: "HyperYak Loading...",
        }),
    ],
    resolve: {
        extensions: ['', '.js','.json','.jsx'],
        modulesDirectories: ['node_modules','src'],
    },
};
