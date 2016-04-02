// Coffeescript plugin for gulp
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	coffee = require('gulp-coffee'),
	rename = require('gulp-rename');


//Compile main *.coffee files
gulp.task('coffee:main', function() {
	return gulp.src([paths.theme.coffee + '/*.coffee'])
		.pipe(plumber())
		.pipe(coffee({bare: true}))
		.pipe(rename({suffix: '.coffee'}))
		.pipe(gulp.dest(paths.theme.js + '/lib'));
});

//Compile main *.coffee files within watch task
gulp.task('coffee:main:changed', function() {
	return gulp.src([paths.theme.coffee + '/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.theme.js + '/lib', {extension: '.coffee.js'}))
		.pipe(coffee({bare: true}))
		.pipe(rename({suffix: '.coffee'}))
		.pipe(gulp.dest(paths.theme.js + '/lib'));
});
