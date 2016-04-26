var gulp = require('gulp');
var sass = require('gulp-sass');
var connect= require('gulp-connect');
var nodemon= require('gulp-nodemon');
var browserSync = require('browser-sync').create();


gulp.task('start', function () {
  nodemon({
    server : 'server.js',
    ext: 'js jade html scss',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('connect', function(){
  connect.server({
  });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:3000"
    });
});

gulp.task('sass', function() {
   gulp.src('scss/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('./public/css/'))
      .pipe(browserSync.stream());
});


gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss',['sass']);
  gulp.watch("public/*.*").on('change', browserSync.reload);



});

gulp.task('default', ['serve, connect','sass','watch', 'start']);
