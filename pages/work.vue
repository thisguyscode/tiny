<template>
  <section class="p-work">
    
    <nuxt-child :key="$nuxt.$route.path"></nuxt-child>
    
  </section>
</template>


<script>
  export default {
  }
</script>


<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

</style>
