// File watcher that uses super-fast chokidar and emits vinyl objects
var gulp = require('gulp'),
	paths = require('./config/paths'),
	runSequence = require('run-sequence');


// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch(
		paths.theme.coffee + '/*.coffee',
		function() {
			runSequence(
				'coffee:main:changed',
				'rigger:main',
				'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.theme.js + '/*.js',
			'!' + paths.theme.js + '/*.min.js',
			paths.theme.js + '/lib/*.js'
		],
		function() {
			runSequence(
			'rigger:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.sass + '/*.{sass,scss}',
		function() {
			runSequence(
			'sass:main:changed',
			'autoprefixer:main',
			'cmq:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.stylus + '/*.styl',
		function() {
			runSequence(
			'stylus:main:changed',
			'autoprefixer:main',
			'cmq:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.data + '/*.*',
		function() {
			runSequence(
			'jade:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.jade + '/*.jade',
		function() {
			runSequence(
			'jade:main:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.theme.helpers + '/**/*.*',
			paths.theme.helpers + '/.htaccess'
		],
		function() {
			runSequence(
				'sync:helpers:changed',
				'browserSync:reload'
			);
		}
	);
});
