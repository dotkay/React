var gulp = require('gulp');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');

var path = {
  HTML: 'src/index.html',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

// ---------------------------------------------------------------------
//   DEVELOPMENT TASKS
// ---------------------------------------------------------------------

// transform task
// 'react' transforms all our js files and outputs the results into
// destination folder dist.
gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_SRC));
});

// copy task
// copies our html file into the dist folder created by the transform task
gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

// watch (development) task
// watches for file changes and runs transform and copy tasks as needed
gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy']);
});

// default task - watch
gulp.task('default', ['watch']);

// ---------------------------------------------------------------------
//   PRODUCTION TASKS
// ---------------------------------------------------------------------

gulp.task('build', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(concat(path.MINIFIED_OUT))
    .pipe(uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

// replace html task
// to go to the minified file and reference the build/build_min.js
// instead of all the different js files
gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('production', ['replaceHTML', 'build']);
