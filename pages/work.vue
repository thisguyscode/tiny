<template>
  <section class="p-work">
    
    <nuxt-child></nuxt-child>
    
  </section>
</template>


<script>
  // import dataProjects from '~/data/projects.json'

  export default {
    // data: () => {
    //   return {
    //     currentProject: null,
    //     projectsArray: []
    //   }
    // },
    // methods: {
    //   getProjects: function () {
    //     var projectGroups = dataProjects.projectGroups
    //     for (var projectGroup in projectGroups) {
    //       var projects = projectGroups[projectGroup].projects
    //       for (var project in projects) {
    //         this.projectsArray.push(projects[project])
    //       }
    //     }
    //   }
    // },
    // mounted () {
    //   this.getProjects()
    //   console.log(this.projectsArray)
    // }
  }
</script>


<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

</style>
