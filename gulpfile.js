/*  Creative Commons 
 *  Attribution - Pas d’Utilisation Commerciale 3.0 France 
 *  http://creativecommons.org/licenses/by-nc/3.0/fr/
 * 
 *  Auteurs: Sylvain Gamel, SARL G.G. inTech
 * 
 */


// ===== CONFIGURATION


var target_dir = ".";

var source_js  = "./src/js";
var source_css = "./src/scss";
var source_fa  = "./src/font-awesome";
var source_img = "./src/img";

var destination_sass  = target_dir + "/_sass/tps";
var destination_css   = target_dir + "/css/tps";
var destination_js    = target_dir + "/js/tps";
var destination_fonts = target_dir + "/fonts";
var destination_img   = target_dir + "/img";


// ===== DEPENDENCIES


const gulp = require('gulp');
const { series } = require('gulp');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var concat = require('gulp-concat');
var copy = require('gulp-copy');


// ===== CLEAN


gulp.task('clean:css', function () {
  return del([
    destination_css
  ]);
});

gulp.task('clean:javascript', function () {
  return del([
    destination_js
  ]);
});

gulp.task('clean', series('clean:css', 'clean:javascript'));


// ===== CSS


gulp.task('fontawesome-css', function () {
  return gulp.src([
      source_fa + '/css/**.css'
  ])
    .pipe(gulp.dest(destination_css));
});

gulp.task('fontawesome-fonts', function () {
  return gulp.src([
      source_fa + '/fonts/*'
  ])
    .pipe(gulp.dest(destination_fonts));
});

gulp.task('fontawesome', series("fontawesome-css", "fontawesome-fonts"));


gulp.task('css-libs-src', function () {
  return gulp.src([
      __dirname + '/node_modules/bootstrap/scss/**/*.scss'
  ])
    .pipe(gulp.dest(destination_sass));
});

gulp.task('css-libs', function () {
  return gulp.src([
      // __dirname + '/node_modules/tether/dist/css/tether*.min.css',
      __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css*'
  ])
    .pipe(gulp.dest(destination_css));
});



gulp.task('build:css', series("css-libs", "css-libs-src"));


// ===== JAVASCRIPT


gulp.task('js-libs', function () {
  return gulp.src([
      __dirname + '/node_modules/jquery/dist/jquery.min.js',
      // __dirname + '/node_modules/tether/dist/js/tether.min.js',
      __dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'
  ])
    .pipe(gulp.dest(destination_js));
});


gulp.task('build:javascript', series('js-libs'));


// ===== BUILD


gulp.task('build', series('build:css', 'build:javascript'));


// ===== DEFAULT TASK


gulp.task('default', series('clean', 'build'));


// ===== PRODUCTION DEPLOYMENT

gulp.task('default', series('build'));
