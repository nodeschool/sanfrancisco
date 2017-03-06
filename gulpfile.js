'use strict';

const gulp = require('gulp');

/*
//  GLP replaces any plugin. no longer requiring assigning to a var. Now you will just use $plugin and object dot
//  notation. $plugin.sass instead of gulp-sass, if it's two words they run together in camelCase fashion. you may
//  overwrite the name by mapping the plugin to the new name as demonstrated below. see
//  https://www.npmjs.com/package/gulp-load-plugins for more info.
*/

const $plug = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
  rename: {
    'gulp-compile-handlebars': 'handlebars',
  },
});

// const handlebars = require('gulp-compile-handlebars');
const fs = require('fs')
// const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
// const babel = require('gulp-babel');

// our paths object for src/dist
const path = {
  scripts: {
    src: './src/scripts',
    dist: './dist/scripts',
  },
  styles: {
    src: './src/styles',
    dist: './dist/styles',
  },
  assets: {
    src: './src/assets',
    dist: './dist/assets',
  },
  vendors: {
    src: './src/vendors'
  }
};
console.log($plug)
// copy assets to dist folder
gulp.task('assets', () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/assets'));
});

// copy styles to dist folder
gulp.task('styles', () => {
  return gulp.src('./src/styles/**/*')
    .pipe($plug.sass({
      includePaths: `${path.vendors.src}/bootstrap/assets/stylesheets`,
    })
      .on('error', sass.logError))
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
    .pipe($plug.handlebars(data, options))
    .pipe($plug.rename('index.html'))
    .pipe(gulp.dest('./dist'));
});

// transpile ES6 javascript
gulp.task('scripts', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe($plug.babel({
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
