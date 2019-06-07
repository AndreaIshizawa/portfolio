var gulp = require("gulp"),
    clean = require('gulp-clean'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass')
    cssmin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    runSequence = require("run-sequence"),
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
      .src(["app/scss/main.scss"])
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
      .pipe(cssmin())
      .pipe(gulp.dest("dist/css"))
  });


//JS  
gulp.task('js', function(){
    return gulp.src('app/js/*.js')
    .pipe(uglify())
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
  gulp.watch("app/*.html", ["html"]);
  gulp.watch("app/scss/**/*.scss", ["sass"]);
  gulp.watch("app/js/**/*.js", ["js"]);
  gulp.watch("app/img/**/*.*", ["img"]);
});


// WATCH
gulp.task("watch", function() {
    gulp.watch("app/*.html", ["html"])
});
  
gulp.task("build", function() {
    runSequence(
      "clean",
      "html",
      "sass",
      "js",
      "img",
      "server"
    );
  });