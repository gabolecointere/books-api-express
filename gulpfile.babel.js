const gulp = require('gulp'),
    gulpMocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest')

//import gulp from 'gulp'
//import gulpMocha from 'gulp-mocha'

gulp.task('test', () => {
    env({vars: {ENV:'Test'}})
    gulp.src('tests/*.js')
        .pipe(gulpMocha({
            reporter: 'nyan'
        }))
})