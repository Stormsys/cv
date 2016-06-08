'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var open = require('gulp-open');
var path = require('path');
var processhtml = require('gulp-processhtml');
var del = require('del');
var serve = require('gulp-serve');
var replace = require('gulp-replace');

var DIST = 'dist';

var dist = function(subpath) {
    return !subpath ? DIST : path.join(DIST, subpath);
};


gulp.task('clean', function() {
    return del.sync([dist()]);
});

gulp.task('copyfonts', function() {
    return gulp
        .src('./bower_components/**/*.{ttf,woff,eof,svg,woff2}')
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
    return gulp.src(dist('index.html'))
        .pipe(open());
});

gulp.task('serve', serve(['./']));

gulp.task('default', ['build'], function() {});


/**
 * Hack used for the local build server.
 */
gulp.task('phone', function() {
    return gulp.src('./index.html')
        .pipe(processhtml({}))
        .pipe(replace(/href="tel:0">Please Request<\/a>/g, 'href="tel:' + process.env.CV_PHONE + '">' + process.env.CV_PHONE + '</a>'))
        .pipe(gulp.dest(dist()));
});