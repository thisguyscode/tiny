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

    <!-- Otherwise use the plain asset -->
    <img
      v-else-if="!responsive && lazy"
      class="c-image lazyload"
      :class="fitClass"
      :data-src="asset"
    />

    <!-- Otherwise use the plain asset -->
    <img
      v-else-if="!responsive && !lazy"
      class="c-image"
      :class="fitClass"
      :src="asset"
    />

  </transition>
</template>

<script>
export default {
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
    // console.log(this.webP)
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
  }
  .contain {
    object-fit: contain;
  }
  .cover {
    object-fit: cover;
  }
  
</style>
