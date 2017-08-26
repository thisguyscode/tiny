<template>

  <l-main-content class="layout-blank">
    <nuxt/>
  </l-main-content>

</template>


<script>

  import lMainContent from '~/components/layout/l-main-content'
  export default {
    components: {
      lMainContent
    }
  }

</script>


<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

  .layout-blank {
    background: $neutral-00;
  }

</style>

