const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/scss/styles.scss'],
    output: {
        path: path.resolve(__dirname, 'dist')
        // ,
        // filename: 'js/editor.blocks.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'css/[name].css' }
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader?-url' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    }
};
