<template>
  <div class="c-image">
    
    <!-- IF it's an svg then simply load it -->
    <img
      v-if="extension === 'svg'"
      :src="img.src"
      :data-src="img.dataSrc"
      :class="img.class">
    </img>

    <!-- ELSE-IF it's a JPG / PNG / etc -->
    <picture v-else class="c-image__picture">
      
      <!-- webP source -->
      <source
        type="image/webp"
        :srcset="source.srcset"
        :data-srcset="source.dataSrcset">
      </source>
      
      <!-- img element-->
      <img
        :class="img.class"
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
      default: 'contain'
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
      var name = string.substring(0, string.lastIndexOf('.'))
      return name
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
        src: this.imgSrc,
        dataSrc: this.imgDataSrc,
        srcset: this.imgSrcset,
        dataSrcset: this.imgDataSrcset,
        class: [
          'c-image__image',
          {
            'c-image__image--cover': this.fit === 'cover',
            'c-image__image--contain': this.fit === 'contain',
            'lazyload': this.lazy === true
          }
        ]
      }
    },
    imgSrc: function () {
      if (this.lazy && this.responsive) {
        return this.asset.placeholder
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
      if (!this.lazy && !this.responsive) {
        return this.asset.webpSrc
      } else if (!this.lazy && this.responsive) {
        return this.asset.webpSrcset
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
      if (this.extension === ('svg' || 'gif')) {
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
              } else if (imageFileName === 'placeholder') {
                src = require(`~/assets/images/${this.imageSrc}/original.${this.extension}`)
                webpSrc = require(`~/assets/images/${this.imageSrc}/original.webp`)
              } else if (imageFileName === 'original') {
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
        for (var k = 0; k < availableSizes.length; k++) {
          var size = availableSizes[k]
          var fitAdjustment = 1
          if (this.fit === 'cover') {
            fitAdjustment = 1.4
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
          placeholder,
          srcset: sizes.toString(),
          webpSrc,
          webpPlaceholder,
          webpSrcset: webpSizes.toString()
        }
      } else if (!this.responsive) {
        if (this.extension === ('svg' || 'gif')) {
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
    }
  }
}
</script>

<style lang="scss">
/* ========================================================================
  # GLOBAL STYLE DEPENDENCIES
======================================================================== */

/* Objects
======================================================================== */
</style>


<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Global variable dependencies
======================================================================== */
$content-max-width: $content-max-width;  
  

/* Base class
======================================================================== */
.c-image {
  height: 100%;
  text-align: center;
}

/* Child classes
======================================================================== */
// <picture> element
.c-image__picture {
  display: block;
  width: 100%;
  height: 100%;
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
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: $content-max-width;
}

.c-image__image--contain {
  object-fit: contain;
}

.c-image__image--cover {
  object-fit: cover;
}


/* Removed loader when required
======================================================================== */
.lazyloaded {
  & ~ .c-image__loader {
    display: none;
  }
}

</style>
