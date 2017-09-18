<template>
  <section>
    <h1>Test Project</h1>
    <h4>{{ testValue }}</h4>
  </section>
</template>

<script>
export default {
  computed: {
    testValue: function () {
      return 'value'
    }
  }
}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  // @import "~assets/styles/imports";
</style>
