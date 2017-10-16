<template>
  
  <section id="page-top" class="page">

    <c-gridlines></c-gridlines>
    <c-baselines></c-baselines>

    <c-site-header></c-site-header>
    
    <nuxt/>

    <c-footer></c-footer>

  </section>
  
</template>

<script>
import cGridlines from '~/components/c-gridlines'
import cSiteHeader from '~/components/c-site-header'
import cBaselines from '~/components/c-baselines'
import cFooter from '~/components/c-footer'
import lWrapper from '~/components/layout/l-wrapper'
import lMainContent from '~/components/layout/l-main-content'

export default {
  scrollToTop: false,
  components: {
    cGridlines,
    cSiteHeader,
    cBaselines,
    cFooter,
    lWrapper,
    lMainContent
  }
}
</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  

  .l-main-content {
    
  }
  .page {
    position: relative;
    overflow: hidden;
  }
    
</style>
