const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		'englemond-admin': './assets/js/englemond-admin.js',
		englemond: './assets/js/englemond.js',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									require('autoprefixer'),
									require('cssnano'),
								],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'englemond.css',
		}),
	],
	externals: {
		jquery: 'jQuery',
	},
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
};
