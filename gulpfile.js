var gulp = require('gulp');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');

var scssPaths = [
  "./src/**/styles/*.{scss,sass}"
];

var jsPaths = [
  "./src/**/*.{js,jsx}"
];

gulp.task('serve', function() {
  return gulp.watch(scssPaths.concat(jsPaths), ['sass', 'lint']);
});

gulp.task('sass', function() {
  return gulp.src(scssPaths, {base: "./src"})
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('lint', () => {
    return gulp.src(jsPaths.concat(['!node_modules/**', '!./src/**/*.test.{js,jsx}']))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('default', ['sass', 'lint', 'serve']);
