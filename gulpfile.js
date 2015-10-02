var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('imagemin', function(){
        gulp.src('res/old/*')
        .pipe(imagemin())
        .pipe(gulp.dest('res'));
    console.log('finished imagemin');
});

gulp.task("default", ['imagemin']);