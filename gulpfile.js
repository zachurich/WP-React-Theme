// Gulp things
var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')({ camelize: true });

// Gulp tasks
gulp.task('styles', function () {
  gulp.src('src/styles/style.scss')
  .pipe(plugins.plumber())
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.sass({ errLogToConsole: true }))
  .pipe(plugins.concat('style.css'))
  .pipe(plugins.autoprefixer('last 4 versions', 'ios 6', 'android 4'))
  .pipe(gulp.dest('build/'))
  .pipe(plugins.cleanCss())
  .pipe(plugins.sourcemaps.write('./maps'))
  .pipe(gulp.dest('wp-content/themes/react/'));
});

gulp.task('watch', function() {
  gulp.watch('src/styles/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
