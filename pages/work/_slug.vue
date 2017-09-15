<template>
  <section>
    
    <c-project-navbar></c-project-navbar>
    <h2>{{ $route.params.slug }}</h2>
    <h1>{{ name }}</h1>
    <h1>{{ date }}</h1>
    <nuxt-child></nuxt-child>

  </section>

</template>

<script>
import lGrid from '~/components/layout/l-grid'
import cProjectNavbar from '~/components/c-project-navbar'
import dataProjects from '~/data/projects.json'

export default {
  scrollToTop: true,
  components: {
    lGrid,
    cProjectNavbar
  },
  data: () => {
    return {
      name: '',
      color: '  '
    }
  },
  asyncData ({ params }) {
    var projectGroups = dataProjects.projectGroups
    var projectsArray = []
    for (var projectGroup in projectGroups) {
      var projects = projectGroups[projectGroup].projects
      for (var project in projects) {
        projectsArray.push(projects[project])
      }
    }
    const currentProject = projectsArray.find(function (item) {
      return item.slug === params.slug
    })
    return currentProject
  },
  methods: {
    //
  }
}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";

</style>
