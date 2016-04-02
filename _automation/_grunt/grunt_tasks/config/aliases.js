module.exports = {
	// Install bower dependencies and place them to dev folders
	'start': [
		'shell:bower',
		'bower:main',
		'clean:gitkeep'
	],

	// Dev task with static server
	'dev': [
		'coffee:main',
		'rigger:main',
		'sass:main',
		'stylus:main',
		'autoprefixer:main',
		'cmq:main',
		'async_jade_data:main',
		'jade:main',
		'sync:helpers',
		'browserSync:dev',
		'watch'
	],

	// Build task
	'build': [
		'imagemin:main',
		'csscomb:main',
		'uglify:main',
		'csso:main',
		'browserSync:test'
	],

	// Regenerate and build project by running all tasks
	'rebuild': [
		'coffee:main',
		'rigger:main',
		'sass:main',
		'stylus:main',
		'autoprefixer:main',
		'cmq:main',
		'async_jade_data:main',
		'jade:main',
		'sync:helpers',
		'imagemin:main',
		'csscomb:main',
		'uglify:main',
		'csso:main'
	],

	// Run server without watching for changes
	'server': [
		'browserSync:test'
	]
};
