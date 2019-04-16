const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'file-drop': path.resolve(__dirname, 'src/file-drop/index.js'),
    'route-parameters': path.resolve(__dirname, 'src/route-parameters/index.js'),
    'named-routes': path.resolve(__dirname, 'src/named-routes/index.js'),
    'multi-site': path.resolve(__dirname, 'src/multi-site/index.js'),
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
};
