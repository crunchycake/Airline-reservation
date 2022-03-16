const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');

function start(done) {
  src('./src/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./dist/css'))
  done()
}

exports.start = start



