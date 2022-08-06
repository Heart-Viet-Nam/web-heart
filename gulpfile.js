const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const terser = require('gulp-terser')
const randomstring = require('randomstring')

const idJS = randomstring.generate({
    length: 15
});

const idCSS = randomstring.generate({
    length: 15
})

// Bundle js files
gulp.task('main-js', () => {
    return gulp
        .src('assets/js/*.js')
        .pipe(concat(`main-${idJS}.bundle.js`))
        .pipe(terser({
            compress: true,
            mangle: true
        }))
        .pipe(gulp.dest('public/js'))
})

gulp.task('validate', () => {
    return gulp
        .src([
            'assets/js/validation/base/message.js',
            'assets/js/validation/base/methods.js',
            'assets/js/validation/*.js'
        ])
        .pipe(concat(`validation-${idJS}.bundle.js`))
        .pipe(terser({
            compress: true,
            mangle: true
        }))
        .pipe(gulp.dest('public/js'))
})

gulp.task('payment', () => {
    return gulp
        .src('assets/js/payment/payment.js')
        .pipe(concat(`payment-${idJS}.bundle.js`))
        .pipe(terser({
            compress: true,
            mangle: true
        }))
        .pipe(gulp.dest('public/js'))
})


// Bundle css files
gulp.task('main-css', () => {
    return gulp
        .src('assets/css/*.css')
        .pipe(concat(`main-${idCSS}.min.css`))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/css'))
})


// Optimize images
gulp.task('images', () => {
    return gulp
        .src(['assets/img/*', 'assets/img/**/*'])
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('public/img'))
})

gulp.task('minify-files', gulp.parallel('main-js', 'validate', 'payment', 'main-css', 'images')) 

gulp.task('watch-files', () => {
    gulp.watch('assets/js/*.js', gulp.series('main-js'))
    gulp.watch([
        'assets/js/validation/base/message.js',
        'assets/js/validation/base/methods.js',
        'assets/js/validation/*.js'
    ], gulp.series('validate'))
    gulp.watch('assets/css/*.css', gulp.series('main-css'))
    gulp.watch(['assets/img/*', 'assets/img/**/*'], gulp.series('images'))
})