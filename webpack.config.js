const webpack = require('webpack');
const path = require('path');

let config = {
    entry: './src/index.js', //entry file
    output: {
        path: path.resolve(__dirname, './public'), //output file
        filename: 'script.js' //output filename
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        // A directory or URL to serve HTML content from.
        historyApiFallback: true,
        // fallback to ./index.html for single page applications.
        inline: true,
        // inline mode (set to flase to disable including client scripts(like live-reload).)
        open: true // open default browser while launching
    },
    devtool: 'eval-source-map' // enable devtool for better debugging experience
}

module.exports = config;

if (process.env.NODE_ENV == 'production') {
    // module.exports.plugins.push(
    //     new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin
    //     new OptimizeCSSAssets() // call the css optimizer (minification)
    // );
}