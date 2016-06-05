var gulp = require('gulp');
var browserify = require('browserify');       // bundles .js source files
var reactify = require('reactify');
var babelify = require('babelify');           // transpiles JSX into JS
var source = require('vinyl-source-stream');


// gulp task - to bundle the .js files
gulp.task('bundle', function() {
  return browserify({
    entries: './app/main.jsx',  // entry point
    debug: true
  }).transform(babelify,  {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('app/dist'))
});

// gulp task - to copy the .js files
gulp.task('copy', ['bundle'], function() {
  return gulp.src(['app/index.html', 'app/style.css'])
              .pipe(gulp.dest('app/dist'));
});

// gulp task - default
gulp.task('default', ['copy'], function() {
  console.log('Gulp completed...');
});
