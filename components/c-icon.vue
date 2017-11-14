<template>

  <icon
    class="c-icon"
    :class="classObject"
    :name="name"
    :title="computedTitle">
  </icon>

</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
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
    },
    computedTitle: function () {
      if (!this.title) {
        return this.name
      } else {
        return this.title
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
