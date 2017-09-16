<template>
  <section class="p-work">
    
    <c-hero>
      <h1>Putting text in boxes & colouring inside the lines.</h1>
    </c-hero>

    <l-main-content>
      
      <section
        class="_project-group"
        :id="'project-group-' + (index + 1)"
        v-for="(projectGroup, index) in projectGroups"
        :key="index"
      >
        <c-project-group-intro
          :index="index + 1"
          :projectGroup="projectGroup"
        >
        </c-project-group-intro>

        <c-project-overview
          v-for="(project, subIndex) in projectGroup.projects"
          :key="subIndex"
          :index="(index + 1) + '.' + String.fromCharCode(97 + subIndex)"
          :project="project"
          :onVisit="updateCurrentProject"
          :onVisitArg="project"
        >
        </c-project-overview>
        
      </section>

      <section>
        <c-cta-panel
          mainCtaHeading="Looking to hire an interface designer?"
          mainCtaBodyText="I’m looking for a full-time job, ideally remote, where I can continue to improve as a digital interface designer"
          mainCtaButton="contact"
          subCtaHeading="Or get to know me"
          subCtaButton="profile">
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
    layout: 'default',
    scrollToTop: true,
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
    },
    methods: {
      updateCurrentProject: function (currentProject) {
        this.$store.commit('updateCurrentProject', currentProject)
      },
      scrollToProject: function () {
        var options = {
          duration: 0,
          easing: 'linear',
          offset: -190
        }
        var project = this.$store.state.scrollToSelector
        this.$scrollTo(project, options)
        this.$store.commit('removeScrollTo')
      }
    },
    mounted () {
      this.scrollToProject()
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
