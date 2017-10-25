const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const WorkboxBuildWebpackPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    entry: './src/index.js', //entry file
    output: {
        path: path.resolve(__dirname, './public'), //output file
        filename: 'script.js' //output filename
    },
    // resolve:{
    //     extensions: [
    //     '.js', '.json', '.scss', '.css', '.jpeg', '.jpg', 'gif', '.png', '.svg'
    //     ],
    //     // automatically reslove certain extensions
    //     alias:{
    //         // create aliases
    //         images: path.resolve(__dirname, 'src/assets/images') // src/assets/images alias
    //     }
    // },
    module: {
        rules: [{
                test: /\.js$/, // files ending with .js
                exclude: /node_modules/, // exclude the node_modules directory
                loader: "babel-loader" // use this (babel-core) loader
            },
            {
                test: /\.scss$/, // files ending with .scss
                use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                                    fallback: 'style-loader',
                                    use: ['css-loader', 'sass-loader', 'postcss-loader'],
                                })), //end extract
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                    loaders: [
                    // 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/'
                    //  if both public & output path are same use below else above
                      'file-loader?name=images/[name].[ext]', {
                        loader: 'image-webpack-loader',
                        // there are options to control 
                        // image optimization within image-webpack-loader.
                        // file-loader should run before image-webpack-loader
                    },            
                ],
                exclude: /node_modules/,
                include: __dirname,                                
            },
        ],
    },
    plugins: [
    	new ExtractTextWebpackPlugin('styles.css'),
        //call the ExtractTextWebpackPlugin constructor and name our css file
        new HtmlWebpackPlugin({
            title:'Starter\'s Box',
            template: './src/index.html',
        }),
        new WorkboxBuildWebpackPlugin({
            globDirectory: 'public/',
            globPatterns: ['**/*.{html,js,css}'],
            // globIgnores: ['admin.html'],
            swSrc: './src/sw.js',
            swDest: './public/sw.js'
            }),
        // make sure the above workbox plugin is the last one for effective cacheing
    ],
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
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin
        new OptimizeCSSAssets() // call the css optimizer (minification)
    );
}