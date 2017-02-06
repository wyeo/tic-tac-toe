const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: __dirname + "./bin",
    filename: "app.output.js",
    publicPath: "/bin/"
  },
  module: {
    loaders: [
      {
        test:     /\.js$/,
        exclude:  /node_modules/,
        loader:   'babel-loader',
		query: {
			presets: ['react', 'es2015']
		}
      },
      {
        test:     /\.css$/,
        loaders:   ["style", "css-loader"]
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
}
