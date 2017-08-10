'use strict';
const gulp = require('gulp'),
      gutil = require('gulp-util'),
      nodemon = require('gulp-nodemon'),
      webpack = require('webpack'),
      eslint = require('gulp-eslint');

gulp.task('default', [ 'webpack' ]);

gulp.task('webpack', (callback) => {
  webpack(
    require('./webpack.config.js'),
    (err, stats) => {
      if(err) throw new gutil.PluginError('webpack', err);
      gutil.log('[webpack]', stats.toString());
      callback();
    });
});

gulp.task('lint', () => {
  gulp.src(['*.js', 'src/**/*.js' ])
    .pipe(eslint({
      baseConfig: {
        env: {
          browser: true,
          es6: true,
          node: true
        },
        extends: [ 'eslint:recommended', 'plugin:react/recommended'],
        plugins: [ 'react' ],
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: 8,
          ecmaFeatures: {
            jsx: true
          }
        },
        rules: {
          quotes: [ 'error', 'single' ],
          semi: [ 'error', 'always' ],
          'no-console': 'off'
        }
      }
    }))
    .pipe(eslint.format());
});

gulp.task('dev', [ 'lint', 'webpack' ], () => {
  nodemon({
    script: 'src/server/server.js',
    tasks: [ 'webpack' ],
    ignore: [ 'dist' ],
    ext: 'js html css',
    env: { 'NODE_ENV': 'development' }
  });
});
