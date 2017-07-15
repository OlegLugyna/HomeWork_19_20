var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task ('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
  .pipe(sass({errLogToConsole: true}))
  .pipe(gulp.dest('./public/css'));
});

gulp.task('connect', function () {
  connect.server({
    root:'public',
    livereload: true});
});

gulp.task('livereload', function () {
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task ('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['sass', 'watch', 'connect']);
