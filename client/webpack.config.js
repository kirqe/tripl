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
            { test: /\.css$/, loader: 'style!css' },
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ['transform-runtime']
              }
            }
        ]
    }
};
