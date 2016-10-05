var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = [
  "./src/**/styles/*.{scss,sass}"
];

gulp.task('serve', function() {
  return gulp.watch(paths, ['sass']);
});

gulp.task('sass', function() {
  return gulp.src(paths, {base: "./src"})
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('default', ['sass', 'serve']);
