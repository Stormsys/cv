'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var open = require('gulp-open');
var path = require('path');
var processhtml = require('gulp-processhtml');
var del = require('del');
var serve = require('gulp-serve');

var DIST = 'dist';

var dist = function(subpath) {
    return !subpath ? DIST : path.join(DIST, subpath);
};


gulp.task('clean', function() {
    return del([dist()]);
});

gulp.task('copyfonts', function() {
    gulp.src('./bower_components/**/*.{ttf,woff,eof,svg,woff2}')
        .pipe(gulp.dest(dist('bower_components')));
});

gulp.task('less', function () {
    return gulp.src('./less/style.less')
        .pipe(less({}))
        .pipe(gulp.dest(dist('css')));
});


gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(processhtml({}))
        .pipe(gulp.dest(dist()));
});


gulp.task('build', ['clean', 'less',  'copyfonts', 'html'], function() {});
gulp.task('view', ['build'], function() {
    gulp.src(dist('index.html'))
        .pipe(open());
});

gulp.task('serve', serve(['./']));

gulp.task('default', ['build'], function() {});