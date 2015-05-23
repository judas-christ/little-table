var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('js', function() {
  return gulp.src('src/*.js')
    .pipe($.jsbeautifier({indentSize: 2}))
    .pipe(gulp.dest('src'))
    .pipe($.uglify())
    .pipe($.header(banner, { pkg : pkg }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src('src/*.scss')
    .pipe($.sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'css', 'html']);
