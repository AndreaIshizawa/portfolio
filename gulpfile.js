var gulp = require("gulp"),
    clean = require('gulp-clean'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass')
    cssmin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require("gulp-babel"),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create()
    ;



//CLEAN dist
gulp.task("clean", function() {
    return gulp.src('dist')
    .pipe(clean())
});


//HTML
gulp.task("html", function() {
    return gulp.src("app/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist"))
 });


// SASS
gulp.task("sass", function() {
    return gulp
      .src("app/scss/main.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
      .pipe(cssmin())
      .pipe(gulp.dest("dist/css"))
  });


//JS  
gulp.task('js', function(){
    return gulp.src([
      'app/js/plugins/typed-text.js',
      'app/js/plugins/particles.js',
      'app/js/plugins/particles-active.js',   
      'app/js/plugins/progressbar.js',
      'app/js/skillbar.js',
      'app/js/menu-controller.js',
    ])
    .pipe(babel({presets:["es2015"]}))
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js-min', function(){

  return gulp.src([
    'app/js/plugins/typed.js',
    'app/js/plugins/typed-text.js'
  ])
  .pipe(gulp.dest('dist/js'));
  
});


//IMG
gulp.task("img", function() {
  return gulp
    .src("app/img/**/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});
    
// BROWSERSYNC
gulp.task("server", function() {
  browserSync.init({server: {baseDir: "dist",index:"index.html"}});
  
  gulp.watch("app/**/*").on("change", browserSync.reload);
  gulp.watch("app/*.html", gulp.series(["html"]));
  gulp.watch("app/scss/**/*.scss", gulp.series(["sass"]));
  gulp.watch("app/js/**/*.js", gulp.series(["js"]));
  gulp.watch("app/img/**/*.*", gulp.series(["img"]));
});


// WATCH
gulp.task("watch", function() {
    gulp.watch("app/*.html", gulp.series(["html"]))
});
  
gulp.task("build", gulp.series(
  "clean",
  "html",
  "sass",
  "js",
  "js-min",
  "img",
  "server"
), done => done());