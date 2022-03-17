
const path = require('path')


module.exports = {
	entry: './js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 9000,
	},
}
