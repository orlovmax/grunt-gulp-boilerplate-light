// Compile Stylus with gulp
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	stylus = require('gulp-stylus'),
	rename = require('gulp-rename');


//Compile *.scss files
gulp.task('stylus:main', function () {
	return gulp.src(paths.theme.stylus + '/*.styl')
		.pipe(stylus())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.theme.css));
});

//Compile *.scss files within watch task
gulp.task('stylus:main:changed', function () {
	return gulp.src(paths.theme.stylus + '/*.styl')
		.pipe(plumber())
		.pipe(changed(paths.theme.css, {extension: '.min.css'}))
		.pipe(stylus())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.theme.css));
});
