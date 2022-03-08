const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');

function sassCompiler(done) {
  src('./../src/saas/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./../assets/css'))
  done()
}

exports.sassCompiler = sassCompiler