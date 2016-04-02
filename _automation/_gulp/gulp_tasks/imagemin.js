// Minify PNG, JPEG, GIF and SVG images
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	imagemin = require('gulp-imagemin');


// Minify image files
gulp.task('imagemin:main', function () {
	return gulp.src(paths.theme.images + '/**/*.{png,jpg,gif,svg}')
		.pipe(plumber())
		.pipe(imagemin({
			progressive: true,
			optimizationLevel: 7
		}))
		.pipe(gulp.dest(paths.theme.images));
});
