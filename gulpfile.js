var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('stylus', function() {
    gulp.src('stylus/*')
      .pipe(stylus())
      .pipe(gulp.dest('css/'));
});
