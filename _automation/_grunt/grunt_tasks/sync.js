// Grunt.js task providing one-way synchronization of directories
module.exports = {
    helpers: {
        files: [{
            expand: true,
            cwd: '<%= paths.dev.helpers %>',
            src: ['*.*', '.htaccess'],
            dest: '<%= paths.build.main %>'
        }]
    }
}
