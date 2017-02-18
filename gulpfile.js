'use strict';

const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const fs = require('fs')
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
 
gulp.task('hbs:compile', () => {

  const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

  const options = {
    ignorePartials: false,
    batch : ['./src/partials'],
  }

  return gulp.src('./src/index.hbs')
    .pipe(handlebars(data, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('browser-sync', () => {
  browserSync.init({
    port: process.env.PORT || 3000,
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("dist/index.html").on('change', browserSync.reload);
});

gulp.task('watch', () => {
  gulp.watch("./src/index.hbs", ['hbs:compile']);
});

gulp.task('default', ['hbs:compile', 'watch', 'browser-sync']);