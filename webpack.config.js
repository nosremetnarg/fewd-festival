const path = require("path"); // adding the Node module
const webpack = require("webpack");


module.exports = {
    entry: './assets/js/script.js', // where webpack starts building module
    output: {
        path: path.resolve(__dirname, 'dist'), // where webpack builds filesand their name
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: 'development'

};
