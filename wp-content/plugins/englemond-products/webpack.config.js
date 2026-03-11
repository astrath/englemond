const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	devtool: 'source-map',
	entry: {
		'englemond-products': './assets/englemond/index.js',
		// Compile assets to blocks
		'blocks/gallery/editor': './assets/gallery/editor.js',
		'blocks/gallery/view': './assets/gallery/view.js',
		'blocks/selection/editor': './assets/selection/editor.js',
		'blocks/selection/view': './assets/selection/view.js',
		'blocks/contact-form/editor': './assets/contact-form/editor.js',
		'blocks/contact-form/view': './assets/contact-form/view.js',
		'blocks/browser/editor': './assets/browser/editor.js',
		'blocks/browser/view': './assets/browser/view.js',
	},
	output: {
		path: path.resolve(__dirname),
		clean: false,
		filename: (pathData) => {
			const entryName = pathData.chunk.name;
			const parts = entryName.split('/');
			const blockName = parts.slice(0, -1).join('/');
			const fileName = parts[parts.length - 1];
			return `${blockName}/build/${fileName}.js`;
		},
	},
	externals: {
		'@wordpress/block-editor': 'wp.blockEditor',
		'@wordpress/blocks': 'wp.blocks',
		'@wordpress/components': 'wp.components',
		'@wordpress/element': 'wp.element',
		'@wordpress/i18n': 'wp.i18n',
		'@wordpress/server-side-render': 'wp.serverSideRender',
		'@wordpress/element': 'wp.element',
		'@wordpress/data': 'wp.data',
		'@wordpress/core-data': 'wp.coreData',
		'react': 'React',
		'react-dom': 'ReactDOM',
		// Externalize jQuery
		'jquery': 'jQuery',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { modules: false }],
							['@babel/preset-react', { runtime: 'classic' }],
						],
					},
				},
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: 'compressed',
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: (pathData) => {
				const entryName = pathData.chunk.name;
				const parts = entryName.split('/');
				const blockName = parts.slice(0, -1).join('/');
				const fileName = parts[parts.length - 1];
				return `${blockName}/build/${fileName}.css`;
			},
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
};
