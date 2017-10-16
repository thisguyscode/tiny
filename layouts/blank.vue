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
  
  
  

  .layout-blank {
    background: $neutral-00;
  }

</style>

