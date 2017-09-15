<template>
  <section class="p-work">
    
    <nuxt-child :key="$route.params.slug"></nuxt-child>
    
  </section>
</template>


<script>
  import dataProjects from '~/data/projects.json'
  
  export default {
    methods: {
      getProjects: function () {
        var projectsArray = []
        var projectGroups = dataProjects.projectGroups
        for (var projectGroup in projectGroups) {
          var projects = projectGroups[projectGroup].projects
          for (var project in projects) {
            projectsArray.push(projects[project])
          }
        }
        this.$store.commit('updateProjectsArray', projectsArray)
      }
    },
    mounted () {
      this.getProjects()
      console.log(this.$store.state.projectsArray)
    }
  }
</script>


<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

</style>
