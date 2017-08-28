<template>
  <section class="p-work">

    <c-hero bgImageSrc="chn-shanghai_02.jpg">
      <h1>Putting text in boxes & colouring inside the lines.</h1>
    </c-hero>

    <l-main-content>
      
      <section
        :id="'project-group-' + (index + 1)"
        style="position:relative;" v-for="(projectGroup, index) in projectGroups"
        :key="projectGroup.id"
        class="_project-group">
          
        <c-project-group-intro
          :index="index + 1"
          :projectGroup="projectGroup">
        </c-project-group-intro>

        <c-project-overview v-for="(project, subIndex) in projectGroup.projects" :key="project.id"
          :index="(index + 1) + '.' + String.fromCharCode(97 + subIndex)"
          :project="project">
        </c-project-overview>
      </section>

      <section class="test">
        <c-cta-panel
          mainCtaHeading="Looking to hire an interface designer?"
          mainCtaBodyText="I’m looking for a full-time job, ideally remote, where I can continue to improve as a digital interface designer"
          mainCtaButton="contact"
          subCtaHeading="Or get to know me"
          subCtaButton="contact">
        </c-cta-panel>
      </section>
  
    </l-main-content>
    
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
    scrollToTop: false,
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
