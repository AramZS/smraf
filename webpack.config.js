var webpack = require('webpack');
module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
	    'webpack/hot/only-dev-server',
	    './src/app.jsx'
	],
	devtool: 'inline-source-map',
	debug: true,
  	module: {
	  loaders: [{
		  test: /\.jsx?$/,
	      exclude: /node_modules/,
	      loader: 'babel',
		  query: {
			  presets: [
				  require.resolve('babel-preset-es2015'),
				  require.resolve('babel-preset-react')
			  ]
		  },
		  plugins: ["react-hot"]
	  }]
	},
	resolve: {
	  extensions: ['', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'app.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true  //http://localhost:8080/webpack-dev-server/
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
