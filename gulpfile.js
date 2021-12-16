'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('config/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/.'));
});

gulp.task('js_bootstrap', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.js'])
        .pipe(gulp.dest("dist/js/"))
});
gulp.task('js_andres', function() {
    return gulp.src(['config/**/*.js'])
        .pipe(gulp.dest("dist/js/."))
});

gulp.task('default', gulp.series(['sass','js_bootstrap','js_andres']));