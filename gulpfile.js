var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var opn = require('opn');

var stylesPath = 'Content/styles/*.scss';

var server = {
    host: 'localhost',
    port: '8001'
}

gulp.task('styles', function() {
    gulp.src(stylesPath) //take set of changed SASS files and run them
        .pipe(sass()) //through compiler (gulp-sass)
        .pipe(gulp.dest('Content/styles/'))
        .pipe(notify({
            message: "You just got super Sassy!"
        }))
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: true,
            host: server.host,
            port: server.port
        }));
});

gulp.task('openbrowser', function() {
    opn('http://' + server.host + ':' + server.port);
})


/*gulp.task('default', function() {
    gulp.watch(stylesPath, ['styles']);
})*/

gulp.task('watch', function() {
    gulp.watch(stylesPath, ['styles']);
});

gulp.task('build', ['styles']);

gulp.task('default', ['build', 'webserver', 'watch', 'openbrowser']);