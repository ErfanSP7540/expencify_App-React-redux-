const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//entry ->output


module.exports=(env)=>{
    return {
        entry:'./src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },
        {
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
                    , {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }]
            })
        }
    ]
        }, plugins: [
            new ExtractTextPlugin('style.css')
            //if you want to pass in options, you can do so:
            //new ExtractTextPlugin({
            //  filename: 'style.css'
            //})
        ],
        devtool: (env === "production" ? 'source-map' :'inline-source-map'),
         devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    }
}};