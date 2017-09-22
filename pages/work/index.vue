<template>
  <section class="p-work">
    
    <c-hero>
      <h1>Putting text in boxes & colouring inside the lines.</h1>
    </c-hero>

    <l-main-content>
      
      <!-- List of project groups -->
      <section
        v-for="(projectGroup, index) in projectGroups"
        class="_project-group"
        :id="'project-group-' + (index + 1)"
        :key="index">

        <!-- Project group intro -->
        <c-project-group-intro
          :index="index + 1"
          :projectGroup="projectGroup">
        </c-project-group-intro><!--END Project group intro -->
        
        <!-- List of projects in group -->
        <c-project-overview
          v-for="(project, subIndex) in projectGroup.projects"
          :key="subIndex"
          :index="(index + 1) + '.' + String.fromCharCode(97 + subIndex)"
          :project="project">
        </c-project-overview><!--END list of projects in group -->

      </section><!--END V-FOR each projectGroup -->

    </l-main-content>  
  </section>
</template>


<script>
  
  import cHero from '~/components/c-hero'
  import cProjectGroupIntro from '~/components/c-project-group-intro'
  import cProjectOverview from '~/components/c-project-overview'
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
      lWrapper,
      lMainContent
    },
    data: () => {
      return {
        projectGroups: dataProjects.projectGroups
      }
    },
    methods: {
      /**
       * Programatically scroll to selector using vue-scrollTo
       * as NUXT has trouble with # urls
       */
      scrollToProject: function () {
        var options = {
          duration: 0,
          easing: 'linear',
          offset: -190
        }
        /**
         * In this case c-project-navbar will have commited the current
         * project's ID to the store on close
         */
        var project = this.$store.state.scrollToSelector
        this.$scrollTo(project, options)
        /** Remove the selector from the store once reached to avoid warnings */
        this.$store.commit('removeScrollTo')
      }
    },
    mounted () {
      /**
       * Only call the scrollToProject method if the store is holding
       * an appropriate selector
       */
      if (this.$store.state.scrollToSelector) {
        this.scrollToProject()
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
