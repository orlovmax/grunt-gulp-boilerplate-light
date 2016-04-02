// Run tasks whenever watched files change
module.exports = {
	coffee: {
		files: [
			'<%= paths.theme.coffee %>/*.coffee'
		],
		tasks: [
			'newer:main:coffee',
			'rigger:main'
		],
		options: {
			spawn: false
		}
	},
	js: {
		files: [
			'<%= paths.theme.js %>/*.js',
			'<%= paths.theme.js %>/lib/*.js'
		],
		tasks: [
			'rigger:main'
		],
		options: {
			spawn: false
		}
	},
	sass: {
		files: [
			'<%= paths.theme.sass %>/*.{sass,scss}'
		],
		tasks: [
			'newer:sass:main',
			'autoprefixer:main',
        	'cmq:main'
		],
		options: {
			spawn: false
		}
	},
	stylus: {
		files: [
			'<%= paths.theme.stylus %>/*.styl'
		],
		tasks: [
			'newer:stylus:main',
			'autoprefixer:main',
        	'cmq:main'
		],
		options: {
			spawn: false
		}
	},
	data: {
		files: [
			'<%= paths.theme.data %>/*.*'
		],
		tasks: [
			'async_jade_data:main',
			'jade:main'
		],
		options: {
			spawn: false
		}
	},
	jade: {
		files: [
			'<%= paths.theme.jade %>/*.jade'
		],
		tasks: [
			'newer:jade:main'
		],
		options: {
			spawn: false
		}
	},
	helpers: {
		files: [
			'<%= paths.theme.helpers %>/**/*.*',
			'<%= paths.theme.helpers %>/.htaccess'
		],
		tasks: [
			'sync:helpers'
		],
		options: {
			spawn: false
		}
	}
}
