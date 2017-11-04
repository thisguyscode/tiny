<template>
  <div class="c-image">
    
    <!-- IF it's an svg then simply load it -->
    <img
      v-if="extension === 'svg'"
      :src="img.src"
      :data-src="img.dataSrc"
      :class="img.class">
    </img>

    <img
      v-else-if="extension === 'gif'"
      :src="img.src"
      :data-src="img.dataSrc"
      :class="img.class">
    </img>

    <!-- ELSE-IF it's a JPG / PNG / etc -->
    <picture v-else class="c-image__picture">
      
      <!-- webP source -->
      <source
        type="image/webp"
        :sizes="img.sizes"
        :srcset="source.srcset"
        :data-srcset="source.dataSrcset">
      </source>
      
      <!-- img element-->
      <img
        :class="img.class"
        :sizes="img.sizes"
        :src="img.src"
        :srcset="img.srcset"
        :data-src="img.dataSrc"
        :data-srcset="img.dataSrcset"
      />

      <!-- Loader -->
      <c-loading-indef
        v-if="lazy && loader"
        class="c-image__loader">
      </c-loading-indef>

    </picture>

  </div>
</template>

<script>
import cLoadingIndef from '~/components/c-loading-indef'
import breakpoints from '~/assets/styles/breakpoints.js'
export default {
  components: {
    cLoadingIndef
  },
  props: {
    imageSrc: {
      required: true
    },
    makeResponsive: {
      type: Boolean,
      default: true
    },
    fit: {
      type: String,
      required: false
    },
    position: {
      default: 'center'
    },
    lazy: {
      type: Boolean,
      default: true
    },
    loader: {
      type: Boolean,
      default: true
    },
    tiny: {
      type: Number,
      default: 1
    },
    mobile: {
      type: Number,
      default: 1
    },
    tablet: {
      type: Number,
      default: 1
    },
    desktop: {
      type: Number,
      default: 1
    },
    wide: {
      type: Number,
      default: 1
    }
  },
  methods: {
    getName: function (string) {
      var start = 0
      var end = string.lastIndexOf('.')
      if (string.includes('/')) {
        start = string.lastIndexOf('/') + 1
      }
      return string.substring(start, end)
    },
    getExtension: function (string) {
      var ext = string.substring(string.lastIndexOf('.') + 1, string.length)
      return ext
    }
  },
  computed: {
    transparentGif: function () {
      return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    },
    img: function () {
      return {
        sizes: this.imgSizes,
        src: this.imgSrc,
        dataSrc: this.imgDataSrc,
        srcset: this.imgSrcset,
        dataSrcset: this.imgDataSrcset,
        class: [
          'c-image__image',
          {
            'c-image__image--fill': this.fit === 'fill',
            'c-image__image--cover': this.fit === 'cover',
            'c-image__image--default-fit': !this.fit,
            'c-image__image--contain': this.fit === 'contain',
            'c-image__image--center': this.position === 'center',
            'c-image__image--top-left': this.position === 'top-left',
            'c-image__image--top-middle': this.position === 'top-middle',
            'c-image__image--bottom-middle': this.position === 'bottom-middle',
            'lazyload': this.lazy === true
          }
        ]
      }
    },
    imgSizes: function () {
      return '(min-width: ' + this.asset.largest + 'px) ' + this.asset.largest + 'px, 100vw'
    },
    imgSrc: function () {
      if (this.lazy && this.responsive) {
        return this.asset.placeholder
      } else if (this.lazy && !this.responsive) {
        return this.transparentGif
      } else if (!this.lazy && this.responsive) {
        return this.transparentGif
      } else {
        return this.asset.src
      }
    },
    imgSrcset: function () {
      if (!this.lazy && this.responsive) {
        return this.asset.srcset
      } else {
        return null
      }
    },
    imgDataSrc: function () {
      if (this.lazy && !this.responsive) {
        return this.asset.src
      } else {
        return null
      }
    },
    imgDataSrcset: function () {
      if (this.lazy && this.responsive) {
        return this.asset.srcset
      } else {
        return null
      }
    },
    source: function () {
      return {
        srcset: this.sourceSrcset,
        dataSrcset: this.sourceDataSrcset
      }
    },
    sourceSrcset: function () {
      if (this.lazy) {
        return this.asset.webpPlaceholder
      } else if (!this.lazy && this.responsive) {
        return this.asset.webpSrcset
      } else if (!this.lazy && !this.responsive) {
        return this.asset.webpSrc
      } else {
        return null
      }
    },
    sourceDataSrcset: function () {
      if (this.lazy && !this.responsive) {
        return this.asset.webpSrc
      } else if (this.lazy && this.responsive) {
        return this.asset.webpSrcset
      } else {
        return null
      }
    },
    imagesArray: function () {
      var context = require.context('~/assets/images/', true, /\.(png|jpe?g|gif|svg|tiff|webp)$/i)
      var array = context.keys()
      return array
    },
    responsive: function () {
      if (this.extension === 'svg' || this.extension === 'gif') {
        return false
      } else if (this.makeResponsive === false) {
        return false
      } else {
        return true
      }
    },
    extension: function () {
      return this.getExtension(this.imageSrc)
    },
    name: function () {
      return this.getName(this.imageSrc)
    },
    asset: function () {
      if (this.responsive) {
        /**
         * Go through the context list and check which images
         * are available. Then:
         * 1. push the sizes as strings to array
         * 2. require the original and placeholder images if present
         */
        var items = this.imagesArray
        var availableSizes = []
        var src = ''
        var placeholder = ''
        var webpSrc = ''
        var webpPlaceholder = ''
        for (var i = 0; i < items.length; i++) {
          if (this.getExtension(items[i]) !== 'webp') {
            if (items[i].startsWith(this.imageSrc, 2)) {
              var stringStart = 3 + this.imageSrc.length
              var stringEnd = items[i].length - (this.getExtension(items[i]).length + 1)
              var imageFileName = items[i].substring(stringStart, stringEnd)
              if (!isNaN(imageFileName)) {
                availableSizes.push(imageFileName)
              } else if (imageFileName === 'original') {
                src = require(`~/assets/images/${this.imageSrc}/original.${this.extension}`)
                webpSrc = require(`~/assets/images/${this.imageSrc}/original.webp`)
              } else if (imageFileName === 'placeholder') {
                placeholder = require(`~/assets/images/${this.imageSrc}/placeholder.${this.extension}`)
                webpPlaceholder = require(`~/assets/images/${this.imageSrc}/placeholder.webp`)
              }
            }
          }
        }
        /**
         * Use the availableSizes array to require the necessary images
         */
        var sizes = []
        var webpSizes = []
        var bp = breakpoints.breakpoints
        var largestSize = 0
        if (availableSizes.length === 0) {
          var original = require(`~/assets/images/${this.imageSrc}/original.${this.extension}`)
          var webpOriginal = require(`~/assets/images/${this.imageSrc}/original.webp`)
          sizes.push(original)
          webpSizes.push(webpOriginal)
        } else {
          largestSize = Math.max.apply(null, availableSizes)
        }
        for (var k = 0; k < availableSizes.length; k++) {
          var size = availableSizes[k]
          var fitAdjustment = 1
          if (this.fit === 'cover') {
            fitAdjustment = 1.51
          }
          var fitAdjustedSize = (size / fitAdjustment)
          var breakpointAdjustedSize = fitAdjustedSize
          if (size >= (bp.wide * this.wide)) {
            breakpointAdjustedSize = fitAdjustedSize / this.wide
          } else if (size < (bp.wide * this.wide) && size >= (bp.desktop * this.desktop)) {
            breakpointAdjustedSize = fitAdjustedSize / this.desktop
          } else if (size < (bp.desktop * this.desktop) && size >= (bp.tablet * this.tablet)) {
            breakpointAdjustedSize = fitAdjustedSize / this.tablet
          } else if (size < (bp.tablet * this.tablet) && size >= (bp.mobile * this.mobile)) {
            breakpointAdjustedSize = fitAdjustedSize / this.mobile
          } else if (size < (bp.mobile * this.mobile) && size >= (bp.tiny * this.tiny)) {
            breakpointAdjustedSize = fitAdjustedSize / this.tiny
          }
          var roundedSize = Math.round(breakpointAdjustedSize)
          var webpImage = require(`~/assets/images/${this.imageSrc}/${size}.webp`) + ` ${(roundedSize)}w`
          var image = require(`~/assets/images/${this.imageSrc}/${size}.${this.extension}`) + ` ${(roundedSize)}w`
          sizes.push(image)
          webpSizes.push(webpImage)
        }
        return {
          src,
          largest: largestSize.toString(),
          placeholder,
          srcset: sizes.toString(),
          webpSrc,
          webpPlaceholder,
          webpSrcset: webpSizes.toString()
        }
      } else if (!this.responsive) {
        if (this.extension === 'svg' || this.extension === 'gif') {
          return {
            src: require(`~/assets/images/${this.imageSrc}/${this.name}.${this.extension}`)
          }
        } else {
          return {
            src: require(`~/assets/images/${this.imageSrc}/original.${this.extension}`),
            webpSrc: require(`~/assets/images/${this.imageSrc}/original.webp`)
          }
        }
      }
    }
  },
  mounted () {
    if (process.browser) {
      require('lazysizes')
      console.log(this.asset.src)
      // console.log(this.asset.largest)
    }
  }
}
</script>


<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */



/* Base class
======================================================================== */
.c-image {
  text-align: center;
  height: 100%;
  width: 100%;
  max-width: $content-max-width;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

/* Child classes
======================================================================== */
// <picture> element
.c-image__picture {
  text-align: center;
  // width: 100%;
  // max-width: 100%;
}


// loader
.c-image__loader {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}


// the actual <img>
.c-image__image {
  display: inline-block;
  overflow: hidden;
  // width: 100%;
  max-width: 100%;
}


.c-image__image--default-fit {
  object-fit: contain;
}

.c-image__image--contain {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}


.c-image__image--fill {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.c-image__image--cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c-image__image--center {
  &.c-image__image--default-fit {
    
  }
  &.c-image__image--contain {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  &.c-image__image--cover {
    object-position: 50% 50%;
  }
}

.c-image__image--top-left {
  &.c-image__image--contain,
  &.c-image__image--default-fit {
    position: absolute;
    top: 0;
    left: 0;
    // transform: translate3d(-50%, -50%, 0);
  }
  &.c-image__image--cover {
    object-position: 0 0;
  }
}

.c-image__image--top-middle {
  &.c-image__image--contain,
  &.c-image__image--default-fit {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  &.c-image__image--cover {
    object-position: 50% 0;
  }
}

.c-image__image--bottom-middle {
  &.c-image__image--contain,
  &.c-image__image--default-fit {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  &.c-image__image--cover {
    object-position: 50% 100%;
  }
}


/* Removed loader when required
======================================================================== */
.lazyloaded {
  & ~ .c-image__loader {
    display: none;
  }
}

.lazyload {
  object-fit: contain;
  width: 100%;
  // max-width: 100%;
  // min-height: 100%;
}

</style>
