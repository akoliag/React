//entry point -> output
const path = require('path');

module.exports = {
    entry: './src/playground/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //which files we want to use this loader on
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, //question mark makes "s" optional so can be both css and scss
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
            //use allows us to provide an array of loaders
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true //tells the server that we're gonna handle routing via the client server
        
    }
};
//loader lets us customize the behaviour of webpack when it loads a given file
//babel-core allows us to run babel from webpack
//babel-loader is a webpack plugin for babel
//babel-cli allows us to run babel from the command line 

