var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    devtool: "source-map",


	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'css-loader' ]
			},

			{
			    test: /\.scss$/,
			    use: ExtractTextPlugin.extract({
			        fallback: "style-loader",
			        use: ["css-loader", "sass-loader"]
			    })
			},		  
		]
	},


    plugins: [
    	new HtmlWebpackPlugin({
	      template: 'index.html'
    	}),

        new ExtractTextPlugin("styles.css"),

    ],

}