<template>
  <section>
    
    <c-project-navbar v-if="this.$store.state.currentProject" :currentProject="currentProject"></c-project-navbar>
    <nuxt-child></nuxt-child>

  </section>

</template>

<script>
import lGrid from '~/components/layout/l-grid'
import cProjectNavbar from '~/components/c-project-navbar'
export default {
  components: {
    lGrid,
    cProjectNavbar
  },
  props: {
    currentProject: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";

</style>
