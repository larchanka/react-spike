const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');

const scssPaths = [
  "./src/**/styles/*.{scss,sass}"
];

const jsPaths = [
  "./src/**/*.{js,jsx}"
];

const jsPathsExcluded = [
  '!node_modules/**',
  '!./src/**/*.test.{js,jsx}'
];

gulp.task('serve', () =>
  gulp.watch(scssPaths.concat(jsPaths), [ 'sass', 'lint' ])
);

gulp.task('sass', () =>
  gulp.src(scssPaths, { base: "./src" })
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest((file) =>
      file.base
    ))
);

gulp.task('lint', () =>
  gulp.src(jsPaths.concat(jsPathsExcluded))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('default', [ 'sass', 'lint', 'serve' ]);
