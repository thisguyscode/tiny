<template>
  <section class="p-work">
    
    <c-hero class="p-work__hero">
      <h1 class="o-heading o-heading--alpha">Putting text in boxes & colouring inside the lines.</h1>
    </c-hero>

    <l-main-content>
      
      <!-- List of project groups -->
      <section
        v-for="(projectGroup, index) in projectGroups"
        class="p-work__project-group"
        :id="'p-work__project-group-' + (index + 1)"
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
        var project = this.$store.state.scrollToSelector
        var projectTop = document.getElementById(project).getBoundingClientRect().top
        var offset = 200
        window.scrollTo(0, projectTop - offset)
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
        setTimeout(() => {
          this.scrollToProject()
        }, 0)
      }
    }
  }

</script>


<style lang="scss" scoped>
  
  
  

  .p-work {
    // padding-top: $unit-xxl;
  }

  .p-work__hero {
    margin-bottom: $unit-xl;
    @include mq($from: desktop) {
      margin-bottom: $unit-xxl;
    }
  }

  .p-work__project-group {
    margin-bottom: $unit-xxl;
    @include mq($from: tablet) {
      margin-bottom: $unit-xxl*2;
    }
    // &:last-of-type {
    //   margin-bottom: 0;
    // }
  }

</style>
