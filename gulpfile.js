var gulp = require('gulp')
var imagemin = require('gulp-imagemin')

var paths = {
  img: ['image-src/**/*.jpg']
}

gulp.task('img', function() {
  return gulp.src(paths.img)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('images/'))
})

gulp.task('default', ['img'])
