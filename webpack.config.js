var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'chatbot-widget.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader'
      ]
    },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
       {
         test: /\.html$/,
         use: [
           'html-loader',
         ],
       },
    ]
  },
   plugins: [
     new webpack.ProvidePlugin({
        $: path.resolve(path.join(__dirname, './static/js/jquery.min.js')),
        jQuery: path.resolve(path.join(__dirname, './static/js/jquery.min.js')),
        "window.$": path.resolve(path.join(__dirname, './static/js/jquery.min.js')),
        "window.jQuery": path.resolve(path.join(__dirname, './static/js/jquery.min.js')),
    })
  ],
}
