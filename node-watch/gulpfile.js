'use strict';

var gulp   = require('gulp');
var exec = require('child_process').exec;
// Gulpfile.js

// var gulp = require('gulp'), nodemon = require('gulp-nodemon')

// gulp.task('lint', function () {
//   console.log('test')
// })

// gulp.task('develop', function () {
//   nodemon({ script: 'server.js'
//           , ext: 'html js'
//           , ignore: ['ignored.js']
//           , tasks: ['lint'] })
//     .on('restart', function () {
//       console.log('restarted!')
//     })
// })

var Paths = [
 '../**/*.js'
];

gulp.task('start', function(done) {

  gulp.watch(Paths, function(done2) {
    console.log("change!")
 //    exec('docker-compose up -d', function (err, stdout, stderr) {
	// 	console.log("end")
	// });
    exec('docker-compose build', function (err, stdout, stderr) {
    	console.log("build")
    	exec('docker-compose up -d', function (err, stdout, stderr) {
    		console.log("up !")
    	});
	});
  });
  done();
});