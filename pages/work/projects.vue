<template>
  
  <!--  'ready' will be set true once data is received -->
  <section v-if="ready">
    
    <!-- Project Nav -->
    <c-project-navbar
      :previous="previousProject"
      :next="nextProject"
      :current="currentProject">
    </c-project-navbar>
    
    <!-- Hero -->
    <c-project-hero
      :project="currentProject">
    </c-project-hero>
      
    <!-- Main project content from ./projects -->
    <l-main-content>
      <nuxt-child></nuxt-child>
    </l-main-content>

    <!-- Bottom Nav -->
    <c-project-nav-panels
      :next="nextProject"
      :previous="previousProject">
    </c-project-nav-panels>
    <!--END Bottom Nav  -->

  </section>

</template>

<script>
import fLink from '~/components/functional/f-link'
import lGrid from '~/components/layout/l-grid'
import lWrapper from '~/components/layout/l-wrapper'
import lMainContent from '~/components/layout/l-main-content'
import cProjectNavbar from '~/components/c-project-navbar'
import cProjectNavPanels from '~/components/c-project-nav-panels'
import cProjectHero from '~/components/c-project-hero'
import cIcon from '~/components/c-icon'
import dataProjects from '~/data/projects.json'

export default {
  scrollToTop: true,
  components: {
    lGrid,
    fLink,
    lWrapper,
    lMainContent,
    cIcon,
    cProjectNavbar,
    cProjectNavPanels,
    cProjectHero
  },
  /** Initialize reactive data values */
  data: () => {
    return {
      currentProject: null,
      nextProject: null,
      previousProject: null,
      ready: false
    }
  },
  computed: {
    /** Pass project color to setContrast() to provide perceived contrast */
    textClass: function () {
      return {
        '_text-light': this.setContrast(this.currentProject.color) === 'light',
        '_text-dark': this.setContrast(this.currentProject.color) === 'dark'
      }
    },
    imageWrapperClass: function () {
      return {
        '--padded': this.currentProject.imgWrapperClass === 'padded'
      }
    },
    imageClass: function () {
      return {
        '--cover': this.currentProject.imgClass === 'cover'
      }
    }
  },
  methods: {
    /** Convert the #hex color code in ~/data/projects.json to an rgb value (as array) */
    hexToRgb: function (hex) {
      hex = hex.replace('#', '')
      var r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16)
      var g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16)
      var b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16)
      var rgb = [r, g, b]
      return rgb
    },
    /**
     * Get the rgb array from hexToRgb and apply perceptual brightness calculations
     * Then return string of 'dark' or 'light' for contrasting color
     */
    setContrast: function (bgColor) {
      var rgb = this.hexToRgb(bgColor)
      var o = Math.round((
        (parseInt(rgb[0]) * 299) +
        (parseInt(rgb[1]) * 587) +
        (parseInt(rgb[2]) * 114)) / 1000)
      var textColor = (o > 125) ? 'dark' : 'light'
      return textColor
    },
    /**
     * Set the current, previous and next projects as objects in this componenents data
     * Could be shortened/optimized/split-up fosho
     */
    setProjects: function () {
      /** Create a flat array of all the projects */
      var projectGroups = dataProjects.projectGroups
      var projectsArray = []
      for (var projectGroup in projectGroups) {
        var projects = projectGroups[projectGroup].projects
        for (var project in projects) {
          /**
           * Add the new properties .group and .groupLink to each project
           * from their parent projectGroup
           */
          projects[project].group = projectGroups[projectGroup].name
          projects[project].groupLink = projectGroups[projectGroup].link
          /**
           * Push to projectsArray (local variable)
           */
          projectsArray.push(projects[project])
        }
      }

      /** Match the current path with the project.slug to set currentProject  */
      var currentPath = this.$route.path
      this.currentProject = projectsArray.find(function (item) {
        return '/work/projects/' + item.slug === currentPath
      })

      /** Get the index of the next project in projectsArray */
      if (projectsArray.indexOf(this.currentProject) === projectsArray.length - 1) {
        var nextProjectIndex = 0
      } else {
        nextProjectIndex = projectsArray.indexOf(this.currentProject) + 1
      }

      /** Get the index of the previous project in projectsArray */
      if (projectsArray.indexOf(this.currentProject) === 0) {
        var previousProjectIndex = projectsArray.length - 1
      } else {
        previousProjectIndex = projectsArray.indexOf(this.currentProject) - 1
      }

      /** Get the objects of previous and next projects by index in projectsArray */
      this.nextProject = projectsArray[nextProjectIndex]
      this.previousProject = projectsArray[previousProjectIndex]

      /** Resolve the v-if that renders the page content */
      this.ready = true
    }
  },
  /**
   * Router guard - called before route is updated
   * Gets/sets the new project's data in this parent component
   */
  beforeRouteUpdate (to, from, next) {
    this.setProjects()
    next()
  },
  /** Get/set the local data on initial mount */
  mounted () {
    this.setProjects()
  }
}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";
</style>
