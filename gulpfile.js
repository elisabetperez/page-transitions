var gulp = require('gulp');
var replace = require('gulp-replace-path');

function replacePath() {
    // place code for your default task here
    return gulp.src('docs/css/common.css')
            .pipe(replace('/fonts/proxima-nova/', '../fonts/proxima-nova/'))
            .pipe(replace('/fonts/garamond/', '../fonts/garamond/'))
            .pipe(replace('/fonts/SohneBreit/', '../fonts/SohneBreit/'))
            .pipe(gulp.dest('docs/css/common'));
}

exports.replacePath = replacePath;


function spanishPath(){
    return gulp.src('docs/es/*.html')
            .pipe(replace('data-src="img/', 'data-src="../img/'))
            .pipe(gulp.dest('docs/es/'));
}
exports.spanishPath = spanishPath;

function frenchPath(){
    return gulp.src('docs/fr/*.html')
            .pipe(replace('data-src="img/', 'data-src="../img/'))
            .pipe(gulp.dest('docs/fr/'));
}
exports.frenchPath = frenchPath;

gulp.task('lang', gulp.series(replacePath, spanishPath, frenchPath))