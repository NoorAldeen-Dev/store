var path = require("path");
var hx = require("html-webpack-plugin");
var cssp = require("mini-css-extract-plugin");
var csso = require("optimize-css-assets-webpack-plugin");

module.exports = {

    mode: 'development',

    entry: {

      main: path.resolve(__dirname, './src/index.js'),

    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath:"",
        filename: 'main.js',


    },
    devServer:{
        static: {

            directory: path.join(__dirname, 'dist'),
    
        },
        port:1239,
        devMiddleware: {
            writeToDisk: true
         },
         hot: false,
         liveReload: true,
         open: true,
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                use: [
                        {
                            loader: "html-loader",
                            options: {
                            minimize: true,
                            },
                        },
                      ],
            },
            {
                test: /\.css$/,
                use: [cssp.loader, "css-loader"],
              },
              {

                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                  exposes: ['$', 'jQuery'],
                }
              },
              
        ],
    },
    plugins:[
        new hx({
            filename:"index.html",
            template:"./src/index.html"
        }),
        new cssp({
            filename:"style.css",
        }),
        new csso({}),
    ],

}