<template>
  <section class="p-work">
    
    <nuxt-child :key="$route.path"></nuxt-child>
    
    <aside>
      <c-cta-panel
        mainCtaHeading="Looking to hire an interface designer?"
        mainCtaBodyText="I’m looking for a full-time job, ideally remote, where I can continue to improve as a digital interface designer"
        mainCtaButton="contact"
        subCtaHeading="Or get to know me"
        subCtaButton="profile">
      </c-cta-panel>
    </aside>
    
  </section>
</template>


<script>
  import cCtaPanel from '~/components/c-cta-panel'
  export default {
    components: {
      cCtaPanel
    }
  }
</script>


<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";
</style>
