<template>
  <span>
    
    <!-- IF it's an svg then simply load it -->
    <img
      v-if="!lazy && extension === 'svg'"
      :src="asset.src"
      class="c-image"
      :class="fitClass">
    </img>
    <img
      v-else-if="lazy && extension === 'svg'"
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      :data-src="asset.src"
      class="c-image lazyload"
      :class="fitClass">
    </img>

    <!-- ELSE-IF it's a JPG / PNG / etc -->
    <picture v-else class="picture">
      
      <!-- webP source: responsive / lazy -->
      <source
        v-if="responsive && lazy"
        type="image/webp"
        :class="fitClass"
        :data-srcset="asset.webpSrcset">
      </source>
      
      <!-- webP source: responsive / NOT lazy -->
      <source
        v-if="responsive && !lazy"
        type="image/webp"
        :class="fitClass"
        :srcset="asset.webpSrcset">
      </source>

      <!-- webP source: NOT responsive / lazy -->
      <source
        v-if="!responsive && lazy"
        type="image/webp"
        :class="fitClass"
        :data-srcset="asset.webpSrc">
      </source>

      <!-- webP source: NOT responsive / NOT lazy -->
      <source
        v-if="!responsive && !lazy"
        type="image/webp"
        :class="fitClass"
        :srcset="asset.webpSrc">
      </source>

      <!-- img: responsive / Lazy -->
      <img
        v-if="responsive && lazy"
        class="c-image lazyload"
        :class="fitClass"
        :src="asset.placeholder"
        :data-srcset="asset.srcset"
      />

      <!-- img: responsive / NOT Lazy -->
      <img
        v-if="responsive && !lazy"
        class="c-image"
        :class="fitClass"
        :srcset="asset.srcset"
      />

      <!-- img: NOT responsive / Lazy -->
      <img
        v-if="!responsive && lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        class="c-image lazyload"
        :class="fitClass"
        :data-src="asset.src"
      />

      <!-- img: NOT responsive / NOT Lazy -->
      <img
        v-if="!responsive && !lazy"
        class="c-image"
        :class="fitClass"
        :src="asset.src"
      />

      <!-- Loader -->
      <c-loading-indef
        v-if="lazy && loader"
        class="loader">
      </c-loading-indef>

    </picture>

  </span>
</template>

<script>
import cLoadingIndef from '~/components/c-loading-indef'
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
    fitClass: function () {
      return {
        'cover': this.fit === 'cover',
        'contain': this.fit === 'contain'
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
        /**
         * Use the availableSizes array to require the necessary images
         */
        var sizes = []
        var webpSizes = []
        for (var k = 0; k < availableSizes.length; k++) {
          var size = availableSizes[k]
          var image = require(`~/assets/images/${this.imageSrc}/${size}.${this.extension}`) + ` ${size}w`
          var webpImage = require(`~/assets/images/${this.imageSrc}/${size}.webp`) + ` ${size}w`
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

<style lang="scss" scoped>
  // Import variables and global settings
  

  .c-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .picture {
    display: block;
    height: 100%;
    width: 100%;
    // position: relative;
  }
  .contain {
    object-fit: contain;
  }
  .cover {
    object-fit: cover;
  }
  .loader {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .lazyloaded {
    & ~ .loader {
      display: none;
    }
  }
</style>
