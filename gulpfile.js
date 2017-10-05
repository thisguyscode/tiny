const gulp = require('gulp')
const webp = require('gulp-webp')
// const changed = require('gulp-changed')
const clone = require('gulp-clone')
const responsive = require('gulp-responsive')
const filter = require('gulp-filter')

var config = {
  images: {
    srcDir: 'images/**/*',
    destDir: 'assets/images/'
  }
}

var cloneSink = clone.sink()

gulp.task('images', function () {
  /** Define task source */
  const f = filter(['**', '!**/*.gif', '!**/*.svg'], {restore: true})
  return gulp.src(config.images.srcDir)
    /** Only process changed images */
    // .pipe(changed(config.images.srcDir))
    .pipe(f)
    .pipe(responsive({
      '*': [
        {
          rename: { suffix: '-original' }
        },
        {
          width: 100,
          rename: { suffix: '-placeholder' }
        },
        {
          width: 600,
          rename: { suffix: '-600px' }
        },
        {
          width: 900,
          rename: { suffix: '-900px' }
        },
        {
          width: 1400,
          rename: { suffix: '-1400px' }
        }
      ]},
      {
        quality: 70,
        progressive: true,
        withMetadata: false,
        withoutEnlargement: true,
        skipOnEnlargement: false,
        errorOnEnlargement: false
      }
    ))
    /** Clone image */
    .pipe(cloneSink)
    /** Convert cloned image to WebP */
    .pipe(webp())
    /** Restore original image */
    .pipe(cloneSink.tap())
    .pipe(f.restore)
    /** Output to destination direction */
    .pipe(gulp.dest(config.images.destDir))
})

gulp.task('default', ['images'])
