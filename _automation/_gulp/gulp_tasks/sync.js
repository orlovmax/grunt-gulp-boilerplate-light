// Copy assets
var gulp = require('gulp'),
	paths = require('./config/paths');


gulp.task('sync:helpers', function() {
	return gulp.src([
		paths.dev.helpers + '/**/',
		paths.dev.helpers + '/.htaccess'
	], {base: paths.dev.helpers})
		.pipe(gulp.dest(paths.build.main));
});


gulp.task('sync:helpers:changed', function() {
	gulp.src([
		paths.dev.helpers + '/**/',
		paths.dev.helpers + '/.htaccess'
	], {base: paths.dev.helpers})
		.pipe(gulp.dest(paths.build.main));
});
