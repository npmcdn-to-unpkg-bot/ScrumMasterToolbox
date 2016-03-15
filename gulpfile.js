//sass configuration

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('*.scss') //take set of changed SASS files and run them
        .pipe(sass()) //through compiler (gulp-sass)
        .pipe(gulp.dest(function(f){
            return f.base;
        }))
});

gulp.task('default', function(){
    gulp.watch('*.scss', ['sass']); //watch for any changes to any SASS files in current folder
})