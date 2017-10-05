const gulp = require('gulp')
const webp = require('gulp-webp')
// const changed = require('gulp-changed')
const clone = require('gulp-clone')

var config = {
  images: {
    srcDir: 'assets/images/**/*(.jp?eg|.png)',
    destDir: 'assets/images/'
  }
}

gulp.task('images', function () {
  /** Define task source */
  return gulp.src(config.images.srcDir)
    /** Clone image */
    .pipe(clone.sink())
    /** Only process changed images */
    // .pipe(changed(config.images.srcDir))
    /** Convert cloned image to WebP */
    .pipe(webp())
    /** Restore original image */
    .pipe(clone.sink().tap())
    /** Output to destination direction */
    .pipe(gulp.dest(config.images.destDir))
})

gulp.task('default', ['images'])
