<template>
  <transition>
    
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
        :srcset="asset.srcSet"
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

  </transition>
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
  computed: {
    fitClass: function () {
      return {
        'cover': this.fit === 'cover',
        'contain': this.fit === 'contain'
      }
    },
    // req: function () {
    //   return require.context('~/assets/images/', true, /\.(png|jpe?g|gif|svg|tiff|webp)$/i)
    // },
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
      var string = this.imageSrc
      var ext = string.substring(string.lastIndexOf('.') + 1, string.length)
      return ext
    },
    name: function () {
      var string = this.imageSrc
      var name = string.substring(0, string.lastIndexOf('.'))
      return name
    },
    asset: function () {
      // var req = this.req
      if (this.responsive) {
        var src = require(`~/assets/images/${this.imageSrc}/original.${this.extension}`)
        var placeholder = require(`~/assets/images/${this.imageSrc}/placeholder.${this.extension}`)
        var sizes = [
          require(`~/assets/images/${this.imageSrc}/600px.${this.extension}`) + ' 600w',
          require(`~/assets/images/${this.imageSrc}/900px.${this.extension}`) + ' 900w',
          require(`~/assets/images/${this.imageSrc}/1400px.${this.extension}`) + ' 1400w'
        ]
        var webpSrc = require(`~/assets/images/${this.imageSrc}/original.webp`)
        var webpPlaceholder = require(`~/assets/images/${this.imageSrc}/placeholder.webp`)
        var webpSizes = [
          require(`~/assets/images/${this.imageSrc}/600px.webp`) + ' 600w',
          require(`~/assets/images/${this.imageSrc}/900px.webp`) + ' 900w',
          require(`~/assets/images/${this.imageSrc}/1400px.webp`) + ' 1400w'
        ]
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
  @import "~assets/styles/imports";

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
