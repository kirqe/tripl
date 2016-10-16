var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
      app: './app'
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        chunkFileName: '[id].js'
    },
    module: {
        loaders: [
            { test: /\.css$/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ['transform-runtime']
              }
            },
            {
              test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
              loader:  'file-loader',
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css', {
        allChunks: true,
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
              jQuery: 'jquery',
              $: 'jquery',
              jquery: 'jquery'
          })
    ],
};
