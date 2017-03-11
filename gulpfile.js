'use strict';

const gulp = require('gulp');

/*
//  gulp-load-plugins replaces any plugin. no longer requiring assigning to a var. Now you will just use $plug
//  and object dot notation. $plugin.sass instead of gulp-sass, if it's two words they run together in camelCase
//  fashion. you may overwrite the name by mapping the plugin to the new name as demonstrated below. see
//  https://www.npmjs.com/package/gulp-load-plugins for more info.
*/

const $plug = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
  rename: {
    'gulp-compile-handlebars': 'handlebars',
  },
});

const fs = require('fs');
const browserSync = require('browser-sync').create();

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
    src: './src/vendors',
  },
};

const prefixerOpts = {
  browsers: ['last 2 versions', '> 2%',]
};

// copy assets to dist folder
gulp.task('assets', () => {
  return gulp.src(`${path.assets.src}/**/*`)
    .pipe(gulp.dest(path.assets.dist));
});

// copiles SASS, including TWBS, and copy styles to dist folder
gulp.task('styles', () => {
  return gulp.src(`${path.styles.src}/main.scss`)
    .pipe($plug.sourcemaps.init())
    .pipe($plug.autoprefixer(prefixerOpts))
    .pipe($plug.sass({
      includePaths: `${path.vendors.src}/bootstrap/assets/stylesheets`,
      outputStyle: 'compressed',
    }).on('error', $plug.sass.logError))
    .pipe($plug.sourcemaps.write())
    .pipe(gulp.dest(path.styles.dist))
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
  return gulp.src(`${path.scripts}/*.js`)
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
  gulp.watch('./src/index.hbs', ['hbs:compile']);
  gulp.watch(`${path.partials.src}/**/*.hbs`, ['hbs:compile']);
  gulp.watch(`${path.scripts.src}/**/*.js`, ['scripts:watch']);
  gulp.watch(`${path.assets.src}/**/*`, ['assets']);
  gulp.watch(`${path.styles.src}/**/*`, ['styles']);
});

gulp.task('default', ['hbs:compile', 'scripts', 'publish', 'watch', 'browser-sync']);
