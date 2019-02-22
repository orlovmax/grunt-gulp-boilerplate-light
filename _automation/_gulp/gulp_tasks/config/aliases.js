// Include gulp
var gulp = require('gulp'),
    runSequence = require('run-sequence');

// Install bower dependencies and place them to dev folders
gulp.task('cleanup', function() {
    runSequence(
        'clean:gitkeep'
    );
});

// Dev task with static server
gulp.task('dev', function() {
    runSequence(
        'rollup:main',
        // 'rigger:main',
        // 'babel:main',
        'sass:main',
        'stylus:main',
        'postcss:dev',
        'cmq:main',
        'pug:main',
        'sync:helpers',
        'browserSync:server',
        'watch'
    );
});

// Build task
gulp.task('build', function() {
    runSequence(
        'imagemin:main',
        'uglify:main',
        'postcss:build',
        'browserSync:server'
    );
});

// Regenerate and build project by running all tasks
gulp.task('rebuild', function() {
    runSequence(
        'rollup:main',
        // 'rigger:main',
        // 'babel:main',
        'sass:main',
        'stylus:main',
        'postcss:dev',
        'cmq:main',
        'pug:main',
        'sync:helpers',
        'imagemin:main',
        'uglify:main',
        'postcss:build'
    );
});

// Run server for static theme
gulp.task('server', function () { 'browserSync:server' });
