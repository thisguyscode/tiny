<template>
  <icon :name="name" class="c-icon" :class="classObject"></icon>
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
        'c-icon--middle': this.vertical === true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  
  

  .c-icon {
    // font-size: .7em;
  }

  .c-icon--middle {
    vertical-align: middle;
  }

</style>
