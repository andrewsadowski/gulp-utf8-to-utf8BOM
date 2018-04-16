const gulp = require('gulp');
const bom = require('gulp-bom');

gulp.task('default', () => {
  gulp
    .src('./test-files/*.srt')
    .pipe(bom())
    .pipe(gulp.dest('dist'));
});
