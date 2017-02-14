module.exports = {
	// Install bower dependencies and place them to dev folders
	'start': [
		'clean:gitkeep'
	],

	// Dev task with static server
	'dev': [
		'coffee:main',
		'rollup:main',
		'sass:main',
		'stylus:main',
		'postcss:dev',
		'cmq:main',
		'pug:main',
		'sync:helpers',
		'browserSync:dev',
		'watch'
	],

	// Build task
	'build': [
		'imagemin:main',
		'uglify:main',
		'postcss:build',
		'browserSync:test'
	],

	// Regenerate and build project by running all tasks
	'rebuild': [
		'coffee:main',
		'rollup:main',
		'sass:main',
		'stylus:main',
		'postcss:dev',
		'cmq:main',
		'pug:main',
		'sync:helpers',
		'imagemin:main',
		'uglify:main',
		'postcss:build'
	],

	// Run server without watching for changes
	'server': [
		'browserSync:test'
	]
};
