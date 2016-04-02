// Grunt task for converting a set of images into a spritesheet and corresponding CSS variables
module.exports = {
	main: {
		src: ['<%= paths.theme.images %>/sprite/*.png', '!<%= paths.theme.images %>/sprite/sprite.png'],
		dest: '<%= paths.theme.images %>/sprite/sprite.png',
		destCss: '<%= paths.theme.images %>/sprite/sprite.css',
		algorithm: 'left-right',
		algorithmOpts: {sort: false},
		padding: 1
	}
}
