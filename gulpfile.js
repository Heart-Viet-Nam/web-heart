const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const UglifyJS = require("uglify-js")
const moment = require('moment-timezone')

const getTime = () => {
    const timeNow = Date.now()
    const getTimeNow = moment(timeNow).tz('Asia/Ho_Chi_Minh').format('DDMMYYYYHHmmss')
    return getTimeNow
}

gulp.task('scripts', () => {
    return gulp.src(['assets/js/*.js', 'assets/js/**/*.js'])
            .pipe(concat('all.js'))
            .pipe(gulp.dest('public/js'));
  });

gulp.task('styles', () => {
    return gulp.src(['assets/css/*.css', 'assets/css/**/*.css'])
            .pipe(concat(`main-${getTime}.min.css`))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('public/css'))
})

gulp.task('images', () => {
    return gulp.src('assets/img/*')
            .pipe(imagemin({optimizationLevel: 5}))
            .pipe(gulp.dest('public/img'))
})

gulp.task('bundle-files', gulp.parallel('scripts', 'styles', 'images')) 

gulp.task('watch-files', () => {
    gulp.watch(['assets/js/*.js', 'assets/js/**/*.js'], gulp.series('scripts'))
    gulp.watch(['assets/css/*.css', 'assets/css/**/*.css'], gulp.series('styles'))
    gulp.watch('assets/img/*', gulp.series('images'))
})