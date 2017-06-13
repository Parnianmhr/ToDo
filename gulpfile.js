var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var cleanCSS = require('gulp-clean-css');
minifycss = require('gulp-minify-css');
nanocss = require('gulp-cssnano');
// this is a new version of minify-css

gulp.task('hello', function(){
    console.log('hello Parnian! You are learning now GULP!');
});


// Here's what a real task may look like:
// gulp.task('task-name', function () {
//   return gulp.src('source-files') // Get source files with gulp.src
//     .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//     .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// })

gulp.task('minify-css', function() {
  return gulp.src('*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function(){
  gulp.start('hello');
});
