var gulp = require('gulp'); 
var sass = require('gulp-sass');


gulp.task('sass', function() {
    return gulp.src('lib/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    //gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('lib/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);