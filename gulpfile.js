const Gulp = require('gulp');
const Sass = require('gulp-sass');
const PostCSS = require('gulp-postcss');
const CSSNext = require('postcss-cssnext');
const CleanCSS = require('gulp-clean-css');
const Concat = require('gulp-concat');

Gulp.task('sass', () => Gulp.src('./scss/**/*.scss')
  .pipe(Sass().on('error', Sass.logError))
  .pipe(PostCSS([ CSSNext() ]))
  .pipe(Concat('style.css'))
  .pipe(CleanCSS({ compatibility: 'ie8' }))
  .pipe(Gulp.dest('./dist'))
);

Gulp.task('default', ['sass'], () => Gulp.watch('./scss/**/*.scss', ['sass']));
