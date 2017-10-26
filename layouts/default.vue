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
  head: {
    htmlAttrs: {
      style: 'background-color: ' + this.testColor + ';'
    }
  },
  data: () => {
    return {
      testColor: '#fff'
    }
  },
  computed: {
    htmlBackgroundColor: function () {
      return this.$store.state.currentColor
    }
  },
  components: {
    cGridlines,
    cSiteHeader,
    cBaselines,
    cFooter,
    lWrapper,
    lMainContent
  },
  mounted () {
    setTimeout(() => {
      this.testColor = '#666'
      // $head.htmlAttrs.style = 'background-color: ' + this.testColor + ';'
    }, 10000)
    console.log(this.$store.state.currentColor)
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
