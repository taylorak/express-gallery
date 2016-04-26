
// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');

// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {

//   browserSync.init({
//     server : './public'
//   });

//   gulp.watch('scss/**/*.scss', ['sass']);
//   gulp.watch('public/*.html').on('change', browserSync.reload);
// });

// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//   return gulp.src('scss/styles.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./public/css'))
//     .pipe(browserSync.stream());
// });

// gulp.task('default', ['serve']);

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect= require('gulp-connect');
var nodemon= require('gulp-nodemon');

gulp.task('start', function () {
 nodemon({
   script : 'server.js',
   ext: 'js jade html scss',
   env: { 'NODE_ENV': 'development' }
 });
});

gulp.task('connect', function(){
 connect.server({
   root: '*.*',
   livereload: true
 });
});

gulp.task('sass', function() {
  gulp.src('scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css/'));
});

gulp.task('livereload', function (){
 gulp.src('./public/**/*')
 .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss',['sass']);
  gulp.watch('./public/**/*', ['livereload']);
  gulp.watch('./scss/**/*', ['livereload']);

});

gulp.task('default', ['connect','sass','watch', 'start']);