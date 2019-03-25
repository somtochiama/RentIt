const nodemon = require('gulp-nodemon');
const gulp = require('gulp')

gulp.task("nodemon", function() {
  nodemon({
    script: "app.js",
    ext: "js",
    ignore: ["dist/"]
  })
  .on("restart", function() {
    console.log(">> node restart");
  })
});