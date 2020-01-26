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
    ]
  }
}
