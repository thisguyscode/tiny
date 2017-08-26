<template>
  <section class="p-work">

    <c-hero>
      <h1>Putting text in boxes & colouring inside the lines.</h1>
    </c-hero>

    <l-main-content>
      
      <section v-for="(projectGroup, index) in projectGroups" :key="projectGroup.id">
        
        <c-project-group-intro
          :index="index + 1"
          :projectGroup="projectGroup">
        </c-project-group-intro>
        
        <c-project-overview v-for="(project, subIndex) in projectGroup.projects" :key="project.id"
          :index="(index + 1) + '.' + String.fromCharCode(97 + subIndex)"
          :project="project">
        </c-project-overview>

      </section>
      
      <!-- <section :key="projectGroup.id" v-for="(projectGroup, index) in projectGroups">
        
        <c-project-group-header
          :index="index+1"
          :name="projectGroup.name"
          :link="projectGroup.link"
          :description="projectGroup.description">
        </c-project-group-header>

      </section> -->

      <l-wrapper>
        
        <h2>work</h2>

        <div class="__filler"></div>

      </l-wrapper>
  
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
    scrollToTop: false,
    layout: 'default',
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
    }
  }

</script>


<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

  .p-work {

  }

</style>
