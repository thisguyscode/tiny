<template>
  
  <section id="page-top">

    <c-gridlines></c-gridlines>

    <c-site-header></c-site-header>
    
    <nuxt/>

  </section>
  
</template>

<script>
import cGridlines from '~/components/c-gridlines'
import cSiteHeader from '~/components/c-site-header'
import lWrapper from '~/components/layout/l-wrapper'
import lMainContent from '~/components/layout/l-main-content'

export default {
  scrollToTop: false,
  components: {
    cGridlines,
    cSiteHeader,
    lWrapper,
    lMainContent
  },
  data: () => {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

  .l-main-content {
    
  }
  
</style>
