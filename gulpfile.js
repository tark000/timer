var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

gulp.task('connect', function() {
	connect.server({
		root: '.',
		port: 4000
	})
});

gulp.task('concat-js', function() {
  gulp.src([
			'node_modules/angular/angular.js',
			'node_modulesangular-bootstrap-npm/dist/angular-bootstrap.js',
			'assets/js/**/*.js'
		])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
	gulp.watch('assets/js/**/*.js', ['concat-js'])
})

gulp.task('default', ['concat-js', 'connect', 'watch'])