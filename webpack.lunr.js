const path = require('path')

module.exports = {
    entry: './src/theme/SearchBar/lunrSearch/lib/DocSearch.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, './src/theme/SearchBar/lunrSearch/'),
        filename: 'docsearch.js',
        library: 'docsearch',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
    ],
};
