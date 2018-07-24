import path from 'path';
import webpack from 'webpack';
import 'whatwg-fetch';

const DIST_PATH = path.resolve( './dist' );

const config = {
	cache: true,
	entry: {
		main: ['whatwg-fetch', './src/index.js'],
	},
	output: {
		path: DIST_PATH,
		filename: '[name].min.js',
	},
	resolve: {
		modules: ['node_modules'],
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						babelrc: true,
					}

				}]
			}
		]
	},
	mode: process.env.NODE_ENV,
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
	],
	stats: {
		colors: true
	}
};

module.exports = config;
