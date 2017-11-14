<template>

  <icon
    class="c-icon"
    :class="classObject"
    :name="name">
  </icon>

</template>

<script>

export default {
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
        'c-icon--middle': this.vertical === true,
        'c-icon--resize': this.resize === true
      }
    }
  }
}
</script>


<style lang="scss" scoped>

/* Base Class
======================================================================== */
.c-icon {
  width: auto;
  max-width: 100%;
  max-height: 100%;
}

</style>
