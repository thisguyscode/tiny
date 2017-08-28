<template>
  <f-no-ssr>
    <icon :name="name" class="c-icon" :class="classObject"></icon>
  </f-no-ssr>  
</template>

<script>
import fNoSsr from '~/components/functional/f-no-ssr'
export default {
  components: {
    fNoSsr
  },
  props: {
    name: {
      type: String,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject: function () {
      return {
        'c-icon--middle': this.vertical === true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-icon {
    // font-size: .7em;
  }

  .c-icon--middle {
    vertical-align: middle;
  }

</style>
