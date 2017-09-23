<template>
  
  <!--  'ready' will be set true once data is received -->
  <section v-if="ready">
        
    <!-- Hero -->
    <c-project-hero
      :project="currentProject">
    </c-project-hero>

    <!-- Project Nav -->
    <l-affix
      :z="999"
      fullWidth
      :className="'_sticky-nav'"
      :relativeElementSelector="'#main'"
      :offset="{ top: 128, bottom: 0 }"
    >
      <c-project-navbar
        :previous="previousProject"
        :next="nextProject"
        :current="currentProject">
      </c-project-navbar>
    </l-affix>
      
    <!-- Main project content from ./projects -->
    <l-main-content id="main">
      <nuxt-child></nuxt-child>
      <div style="height: 1000px;"></div>
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
import lAffix from '~/components/layout/l-affix'
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
    lAffix,
    cIcon,
    cProjectNavbar,
    cProjectNavPanels,
    cProjectHero
  },
  /** Initialize reactive data values */
  data: () => {
    return {
      currentProject: this.nullData,
      nextProject: this.nullData,
      previousProject: this.nullData,
      ready: false
    }
  },
  computed: {
    /** Setting nullData object to solve refresh bug */
    nullData: function () {
      return {
        color: '',
        slug: ''
      }
    },
    /** Pass project color to setContrast() to provide perceived contrast */
    textClass: function () {
      return {
        '_text-light': this.currentProject.contrastingColor === 'light',
        '_text-dark': this.currentProject.contrastingColor === 'dark'
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
    getProjects: function () {
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
           * Add the contrasting color to the array object for convenience
           */
          projects[project].contrastingColor = this.setContrast(projects[project].color)
          /**
           * Push to projectsArray (local variable)
           */
          projectsArray.push(projects[project])
        }
      }
      /** Commit this array to the store */
      this.$store.commit('setProjectsArray', projectsArray)
    },
    /**
     * Set the current, previous and next projects as objects in this componenents data
     * Could be shortened/optimized/split-up fosho
     */
    setProjects: function () {
      /** Match the current path with the project.slug to set currentProject  */
      var currentPath = this.$route.path
      var projectsArray = this.$store.state.projectsArray
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
   * Sets the new project's data in this parent component
   */
  beforeRouteUpdate (to, from, next) {
    /** Block content rendering until new data is loaded */
    this.ready = false
    this.setProjects()
    next()
  },
  /** Get the projects and store then set the local data on initial mount */
  mounted () {
    this.getProjects()
    this.setProjects()
  }
}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";

  // ._sticky-nav {
  //   opacity: 1;
  //   transition: opacity .1s ease;
  //   &.affix-bottom {
  //     opacity: 0;
  //   }
  // }

</style>
