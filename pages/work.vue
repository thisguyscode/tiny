<template>
  <section class="p-work">
    
    <nuxt-child></nuxt-child>
    
  </section>
</template>


<script>
  
  import cHero from '~/components/c-hero'
  import cProjectGroupIntro from '~/components/c-project-group-intro'
  import cProjectOverview from '~/components/c-project-overview'
  import cCtaPanel from '~/components/c-cta-panel'
  import lWrapper from '~/components/layout/l-wrapper'
  import lMainContent from '~/components/layout/l-main-content'
  import dataProjects from '~/data/projects.json'

  export default {
    layout: 'default',
    components: {
      cHero,
      cProjectGroupIntro,
      cProjectOverview,
      cCtaPanel,
      lWrapper,
      lMainContent
    },
    data: () => {
      return {
        projectGroups: dataProjects.projectGroups
      }
    }
  }

</script>


<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

  .p-work {

  }
  ._project-group {
    margin-bottom: $unit-xxl*2;
  }

</style>
