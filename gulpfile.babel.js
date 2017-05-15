const gulp = require('gulp'),
    gulpMocha = require('gulp-mocha')
//import gulp from 'gulp'
//import gulpMocha from 'gulp-mocha'

gulp.task('test', () => {
    gulp.src('tests/*.js')
        .pipe(gulpMocha({
            reporter: 'nyan'
        }))
})