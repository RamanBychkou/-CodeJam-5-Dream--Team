const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'./src/js/index.js',
		'./src/css/style.css',
	],
	output: {
    path: path.resolve(__dirname, 'dist/src'),
    filename: 'main.js'
  },
  module: {
    rules: [
			{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'img/[name].[ext]'}  
          }
        ]
      },
			{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
    ]
	},
	plugins: [
    new CopyWebpackPlugin([ 
			{from: './src/*.html', to: path.join(__dirname, 'dist')},
			{from: './src/img/*', to: path.join(__dirname, 'dist')}
		], []
		)],
	devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};