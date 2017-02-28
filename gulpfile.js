'use strict';

const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const fs = require('fs')
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

// copy assets to dist folder
gulp.task('assets', () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/assets'));
});

// copy styles to dist folder
gulp.task('styles', () => {
  return gulp.src('./src/styles/**/*')
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.stream());
});

// publish assets and styles to dist fodler
gulp.task('publish', ['assets', 'styles']);

// compile handlebars templates
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

// transpile ES6 javascript
gulp.task('scripts', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/scripts'));
});
gulp.task('scripts:watch', ['scripts'], function (done) {
    browserSync.reload();
    done();
});

// serve files for development
gulp.task('browser-sync', () => {
  browserSync.init({
    port: process.env.PORT || 3000,
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("dist/index.html").on('change', browserSync.reload);
});

// watch and trigger tasks
gulp.task('watch', () => {
  gulp.watch("./src/index.hbs", ['hbs:compile']);
  gulp.watch("./src/partials/**/*.hbs", ['hbs:compile']);
  gulp.watch("./src/scripts/**/*.js", ['scripts:watch']);
  gulp.watch("./src/assets/**/*", ['assets']);
  gulp.watch("./src/styles/**/*", ['styles']);
});

gulp.task('default', ['hbs:compile', 'scripts', 'publish', 'watch', 'browser-sync']);