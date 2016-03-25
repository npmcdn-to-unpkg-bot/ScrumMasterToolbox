var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var opn = require('opn');

var inputStylesPath = 'Content/styles/*.scss';
var outputStylesPath = 'Content/styles/';

var server = {
    host: 'localhost',
    port: '8001'
}

gulp.task('styles', function() {
    gulp.src(inputStylesPath) //take set of changed SASS files and run them
        .pipe(sass()) //through compiler (gulp-sass)
        .pipe(gulp.dest(outputStylesPath))
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            host: server.host,
            port: server.port
        }));
});

gulp.task('openbrowser', function() {
    opn('http://' + server.host + ':' + server.port);
})

gulp.task('watch', function() {
    gulp.watch(inputStylesPath, ['styles']);
});

gulp.task('default', ['webserver', 'watch', 'openbrowser']);