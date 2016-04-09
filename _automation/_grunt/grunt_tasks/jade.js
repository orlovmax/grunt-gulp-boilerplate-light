// Compile Jade templates
module.exports = {
	main: {
		options: {
			client: false,
			pretty: true
		},
		files: [ {
			cwd: '<%= paths.theme.jade %>/pages',
			src: ['*.jade'],
			dest: '<%= paths.theme.html %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
