<template>
  <icon :name="name" class="c-icon" :class="classObject"></icon>
</template>

<script>
import Icon from 'vue-awesome/components/Icon.vue'

import 'vue-awesome/icons/arrow-left.js'
import 'vue-awesome/icons/arrow-right.js'

import 'vue-awesome/icons/bar-chart.js'
import 'vue-awesome/icons/briefcase.js'
import 'vue-awesome/icons/bullhorn.js'
import 'vue-awesome/icons/chevron-right.js'
import 'vue-awesome/icons/chevron-left.js'
import 'vue-awesome/icons/css3.js'
import 'vue-awesome/icons/html5.js'
import 'vue-awesome/icons/git.js'
import 'vue-awesome/icons/github.js'
import 'vue-awesome/icons/chevron-up.js'
import 'vue-awesome/icons/chevron-down.js'
import 'vue-awesome/icons/close.js'
import 'vue-awesome/icons/comments.js'
import 'vue-awesome/icons/envelope.js'
import 'vue-awesome/icons/external-link.js'
import 'vue-awesome/icons/eye.js'
import 'vue-awesome/icons/file.js'
// import 'vue-awesome/icons/gear.js'
import 'vue-awesome/icons/heart.js'
import 'vue-awesome/icons/pencil.js'
import 'vue-awesome/icons/pied-piper.js'
// import 'vue-awesome/icons/plus.js'
// import 'vue-awesome/icons/search.js'
import 'vue-awesome/icons/user.js'
import 'vue-awesome/icons/user-circle.js'
import 'vue-awesome/icons/user-circle-o.js'
import 'vue-awesome/icons/user-plus.js'

import 'vue-awesome/icons/lightbulb-o.js'
import 'vue-awesome/icons/hourglass-2.js'
import 'vue-awesome/icons/home.js'
import 'vue-awesome/icons/fire.js'
import 'vue-awesome/icons/money.js'
import 'vue-awesome/icons/mouse-pointer.js'
import 'vue-awesome/icons/puzzle-piece.js'

export default {
  components: {
    Icon
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
