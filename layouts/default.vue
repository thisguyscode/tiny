<template>
  
  <section id="page-top" class="page">
    
    <c-site-header></c-site-header>
    
    <nuxt/>

    <c-footer></c-footer>

  </section>
  
</template>

<script>
import cSiteHeader from '~/components/c-site-header'
import cFooter from '~/components/c-footer'
import lMainContent from '~/components/layout/l-main-content'

export default {
  scrollToTop: false,
  components: {
    cSiteHeader,
    cFooter,
    lMainContent
  }
}
</script>

<style lang="scss" scoped>
  
  
  

  .l-main-content {
    
  }
  .page {
    position: relative;
    overflow: hidden;
  }
    
</style>
