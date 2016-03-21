var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var watch = require('gulp-watch');

gulp.task('styles', function() {
    gulp.src('Content/styles/*.scss') //take set of changed SASS files and run them
        .pipe(sass()) //through compiler (gulp-sass)
        .pipe(gulp.dest('Content/styles/'))
        .pipe(notify({
            message: "You just got super Sassy!"
        }))
});

gulp.task('default', function() {
    gulp.watch('Content/styles/*.scss', ['styles']);
})

/*gulp.task('watch', function() {
    //watch scss files
    gulp.watch('Content/styles/*.scss', function() {
        gulp.run('styles');
    })
})

gulp.task('default', ['styles', 'watch']);*/