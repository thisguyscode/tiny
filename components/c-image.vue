<template>
  <transition>

    <!-- Use picture for images with responsive sizes -->
    <picture v-if="responsive && lazy" class="picture">
      <source
        type="image/webp"
        :class="fitClass"
        :data-srcset="asset.webpSrcset">
      </source>
      <img
        class="c-image lazyload"
        :class="fitClass"
        :src="asset.placeholder"
        :data-srcset="asset.srcset"
      />
      <c-loading-indef v-if="loader" class="loader"></c-loading-indef>
    </picture>

    <!-- Non lazy version -->
    <picture v-if="responsive && !lazy" class="picture">
      <source
        type="image/webp"
        :class="fitClass"
        :srcset="asset.webpSrcset">
      </source>
      <img
        class="c-image"
        :class="fitClass"
        :src="asset.placeholder"
        :srcset="asset.srcset"
      />
    </picture>

    <span v-else-if="extension === 'svg'" v-html="asset"></span>

    <!-- Otherwise use the plain asset -->
    <span v-else-if="!responsive && lazy">
      <img
        class="c-image lazyload"
        :class="fitClass"
        :data-src="asset"
      />
      <c-loading-indef v-if="loader" class="loader"></c-loading-indef>
    </span>

    <!-- Otherwise use the plain asset -->
    <span v-else-if="!responsive && !lazy">
      <img
        class="c-image"
        :class="fitClass"
        :src="asset"
      />
    </span>

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
    isLazy: function () {
      if (this.lazy) {
        return true
      } else {}
    },
    fitClass: function () {
      return {
        'cover': this.fit === 'cover',
        'contain': this.fit === 'contain'
      }
    },
    req: function () {
      return require.context('~/assets/images/', true, /\.(png|jpe?g|gif|svg|tiff|webp)$/i)
    },
    responsive: function () {
      if (this.extension === ('svg' || 'gif')) {
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
      var req = this.req
      if (this.responsive) {
        var src = req(`./${this.imageSrc}/original.${this.extension}`)
        var placeholder = req(`./${this.imageSrc}/placeholder.${this.extension}`)
        var sizes = [
          req(`./${this.imageSrc}/600px.${this.extension}`) + ' 600w',
          req(`./${this.imageSrc}/900px.${this.extension}`) + ' 900w',
          req(`./${this.imageSrc}/1400px.${this.extension}`) + ' 1400w'
        ]
        var webpSrc = req(`./${this.imageSrc}/original.webp`)
        var webpPlaceholder = req(`./${this.imageSrc}/placeholder.webp`)
        var webpSizes = [
          req(`./${this.imageSrc}/600px.webp`) + ' 600w',
          req(`./${this.imageSrc}/900px.webp`) + ' 900w',
          req(`./${this.imageSrc}/1400px.webp`) + ' 1400w'
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
        return req(`./${this.imageSrc}/${this.imageSrc}`)
      }
    }
  },
  mounted () {
    console.log(this.fit)
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
