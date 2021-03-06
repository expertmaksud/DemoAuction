/**
 * `copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders from your `assets/` directory into
 * the web root (`.tmp/public`) so they can be served via HTTP,
 * and also for further pre-processing by other Grunt tasks.
 *
 * #### Normal usage (`sails lift`)
 * Copies all directories and files (except CoffeeScript and LESS)
 * from the `assets/` folder into the web root -- conventionally a
 * hidden directory located `.tmp/public`.
 *
 * #### Via the `build` tasklist (`sails www`)
 * Copies all directories and files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-copy
 *
 */
module.exports = function (grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets',
        src: [
          '**/*.!(coffee|less|ts|map)',
          '!app/*.ts',
          '!app/*.*.ts',
          '!app/*.js.map',
          '!app/*.*.js.map',
          '!package.json',
          '!typings.json',
          '!tsconfig.json',
          '!node_modules/**',
          'node_modules/es6-shim/**',
          'node_modules/es6-promise/**',
          'node_modules/@angular/**',
          'node_modules/angular2-in-memory-web-api/**',
          'node_modules/systemjs/**',
          'node_modules/reflect-metadata/**',
          'node_modules/rxjs/**',
          'node_modules/zone.js/**',
          'node_modules/jquery/**',
          'node_modules/bootstrap/**',
          'node_modules/angular2-locker/**',
          'node_modules/socket.io-client/**'
        ],
        dest: '.tmp/public'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    }
  });

  grunt.config.set('clean', {
    options: { force: true },
    dev: ['.tmp/public/**'],
    build: ['www']
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
