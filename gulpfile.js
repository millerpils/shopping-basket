var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

gulp.task('css', function() {
  var css_src = 'src/scss/main.scss';
  var css_dest = 'src';

  return gulp.src(css_src)
    .pipe(sass())
    .pipe(gulp.dest(css_dest)) 
    .on('error', gutil.log); 
});

gulp.task('default', function(){
  gulp.watch('src/scss/**/*.scss', gulp.series('css')); 
})