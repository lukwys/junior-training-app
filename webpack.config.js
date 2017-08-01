const path = require('path');

module.exports = {
    context:
        path.resolve(__dirname, 'src'),
    entry:
        './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            loader :'babel-loader',
            query  :{
                presets:['react','es2015']
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
};
