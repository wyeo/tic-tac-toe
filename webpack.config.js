const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: `${__dirname} ./bin`,
    filename: 'app.output.js',
    publicPath: '/bin/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css-loader'],
      },
    ],
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ],
}
