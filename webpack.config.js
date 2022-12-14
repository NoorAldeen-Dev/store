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
                test:  /\.(sa|sc|c)ss$/,
                use: [cssp.loader, "css-loader","sass-loader"],
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
        new hx({
            filename:"product.html",
            template:"./src/product.html"
        }),
        new hx({
            filename:"checkout.html",
            template:"./src/checkout.html"
        }),
        new hx({
            filename:"payment.html",
            template:"./src/payment.html"
        }),
        new hx({
            filename:"search.html",
            template:"./src/search.html"
        }),
        new hx({
            filename:"contact.html",
            template:"./src/contact.html"
        }),
        new cssp({
            filename:"style.css",
        }),
        new csso({}),
    ],

}