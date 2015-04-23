var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('clean', function(cb) {
  return del('dist/**', cb);
});

gulp.task('test-html', function(cb) {
  return gulp.src(['test/**'])
    .pipe(gulp.dest('dist'));
});

gulp.task('font', function() {
  return gulp.src('lib/font/**/*')
    .pipe(gulp.dest('dist/font'));
});

gulp.task('sass', function() {
  return gulp.src('lib/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function(cb) {
  runSequence(
    ['clean'], ['font', 'sass', 'test-html', 'watch-test'],
    cb
  );
});

gulp.task('watch', function() {
  gulp.watch('lib/sass/**/*.scss', ['sass']);
});

gulp.task('watch-test', function() {
  gulp.watch('lib/sass/**/*.scss', ['sass']);
  gulp.watch(['test/**'], ['test-html']);
});

gulp.task('build', function(cb) {
  runSequence(
    ['clean'], ['clean', 'font', 'sass', 'watch'],
    cb
  );
});

gulp.task('default', ['build']);
