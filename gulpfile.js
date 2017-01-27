var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('scss', function() {
  return gulp.src('app/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/styles'))
    .pipe(reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'scss'], function() {
  gulp.watch('app/styles/**/*.scss', ['scss']);
  gulp.watch('app/html/**/*.html', reload);
  gulp.watch('app/js/**/*.js', reload);
});
