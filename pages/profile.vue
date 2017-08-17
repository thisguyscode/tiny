<template>
  
    <div class="o-wrapper">
      
      <h2>profile</h2>

      <atm-blockquote></atm-blockquote>

      <div class="__filler"></div>

    </div>
    
</template>

<script>
import atmBlockquote from '~components/atoms/atm-blockquote.vue'

export default {
  scrollToTop: false,
  layout: 'default',
  components: {
    atmBlockquote
  }
}
</script>

<style lang="scss" scoped>
  .__filler {
    height: 2000px;
  }
</style>
