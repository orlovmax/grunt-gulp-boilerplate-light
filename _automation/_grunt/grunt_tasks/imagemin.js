//Minify images
module.exports = {
	main: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= paths.theme.images %>',
			src: ['**/*.*'],
			dest: '<%= paths.theme.images %>'
		}]
	}
}
