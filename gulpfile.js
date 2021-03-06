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
        .src('./bower_components/font-awesome/fonts/*.{ttf,woff,eof,svg,woff2}')
        .pipe(gulp.dest(dist('assets/fonts')));
});

gulp.task('copyfonts-roboto', function() {
    return gulp
        .src('./bower_components/roboto-fontface/fonts/roboto/*-{Light,Regular,Bold}.{ttf,woff,eof,svg,woff2}')
        .pipe(gulp.dest(dist('assets/fonts/Roboto')));
});

gulp.task('copyfavico', function() {
    return gulp
        .src('./favicon.ico')
        .pipe(gulp.dest(dist('')));
});

gulp.task('less', function () {
    return gulp.src('./less/style.less')
        .pipe(less({}))
        .pipe(gulp.dest(dist('assets/css')));
});


gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(processhtml({}))
        .pipe(gulp.dest(dist()));
});


gulp.task('assets', function () {
    return gulp.src(['assets/*', 'assets/**/*'])
        .pipe(gulp.dest(dist('assets')));
});


gulp.task('build', ['clean', 'less',  'copyfonts',  'copyfonts-roboto', 'assets', 'copyfavico', 'html'], function() {});
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
        .pipe(replace(/<span class="phone">Available on request<\/span>/g, '<a class="phone" href="tel:' + process.env.CV_PHONE + '">' + process.env.CV_PHONE + '</a>'))
        .pipe(gulp.dest(dist()));
});