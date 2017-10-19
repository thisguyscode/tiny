<template>
  
  <!--  'ready' will be set true once data is received -->
  <section id="top">
        
    <!-- Hero -->
    <c-project-hero
      :project="currentProject"
      :color="projectColor"
      :transitionEnd="transitionEnd">
    </c-project-hero>

    <div id="sticky-trigger">

    <!-- Project Nav -->
    <l-affix
      :z="999"
      fullWidth
      className="_sticky-nav"
      :relativeElementSelector="'#sticky-trigger'"
    >
      <template scope="props" slot="contents">
        <c-project-navbar
          :previous="previousProject"
          :next="nextProject"
          :current="currentProject"
          :color="projectColor">
        </c-project-navbar>
      </template>
    </l-affix>

      <c-project-details
        :project="currentProject"
        :color="projectColor"
        :transitionEnd="transitionEnd">
      </c-project-details>
        
      <!-- Main project content from ./projects -->
      <l-main-content>
        <nuxt-child></nuxt-child>
      </l-main-content>
    
    </div>

    <!-- Bottom Nav -->
    <nav class="c-project-nav-panels">
      <l-grid>
        <div class="l-grid__cell u-1/2@mobile">
          <c-project-nav-panel :transitionEnd="transitionEnd" :project="previousProject" direction="previous"></c-project-nav-panel>
        </div>
        <div class="l-grid__cell u-1/2@mobile">
          <c-project-nav-panel :transitionEnd="transitionEnd" :project="nextProject" direction="next"></c-project-nav-panel>
        </div>
      </l-grid>
    </nav>
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
import cProjectNavPanel from '~/components/c-project-nav-panel'
import cProjectHero from '~/components/c-project-hero'
import cProjectDetails from '~/components/c-project-details'
import cIcon from '~/components/c-icon'

export default {
  components: {
    lGrid,
    fLink,
    lWrapper,
    lMainContent,
    lAffix,
    cIcon,
    cProjectNavbar,
    cProjectNavPanel,
    cProjectHero,
    cProjectDetails
  },
  /** Initialize reactive data values */
  data: () => {
    return {
      transitionEnd: false,
      projectColor: '',
      currentProject: {
        slug: '',
        color: ''
      },
      nextProject: {
        slug: '',
        color: ''
      },
      previousProject: {
        slug: '',
        color: ''
      },
      projectsArray: []
    }
  },
  methods: {
    /**
     * Set the current, previous and next projects as objects in this componenents data
     * Could be shortened/optimized/split-up fosho
     */
    setProjects: function (to) {
      var projectsArray = this.$store.state.projectsArray
      /** Match the current path with the project.slug to set currentProject  */
      if (to) {
        var currentPath = to.path
      } else {
        currentPath = this.$route.path
      }

      var currentProject = projectsArray.find(function (item) {
        if (currentPath.endsWith('/')) {
          return '/work/projects/' + item.slug + '/' === currentPath
        } else {
          return '/work/projects/' + item.slug === currentPath
        }
      })

      /** Get the index of the next project in projectsArray */
      if (projectsArray.indexOf(currentProject) === projectsArray.length - 1) {
        var nextProjectIndex = 0
      } else {
        nextProjectIndex = projectsArray.indexOf(currentProject) + 1
      }

      /** Get the index of the previous project in projectsArray */
      if (projectsArray.indexOf(currentProject) === 0) {
        var previousProjectIndex = projectsArray.length - 1
      } else {
        previousProjectIndex = projectsArray.indexOf(currentProject) - 1
      }
      /** Get the objects of previous and next projects by index in projectsArray */
      this.currentProject = currentProject
      this.nextProject = projectsArray[nextProjectIndex]
      this.previousProject = projectsArray[previousProjectIndex]
    },
    getNextColor: function (to) {
      var currentPath = to.path
      var nextProject = this.$store.state.projectsArray.find(function (item) {
        if (currentPath.endsWith('/')) {
          return '/work/projects/' + item.slug + '/' === currentPath
        } else {
          return '/work/projects/' + item.slug === currentPath
        }
      })
      return nextProject.color
    }
  },
  watch: {
    '$route' (to, from) {
      setTimeout(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
          this.projectColor = this.getNextColor(to)
        }, 50)
        setTimeout(() => {
          this.transitionEnd = false
        }, 100)
        setTimeout(() => {
          this.setProjects(to)
        }, 300)
        setTimeout(() => {
          this.transitionEnd = true
        }, 400)
      }, 0)
    }
  },
  /** Get the projects and store then set the local data on initial mount */
  mounted () {
    this.setProjects()
    setTimeout(() => {
      window.scrollTo(0, 0)
      setTimeout(() => {
        this.projectColor = this.currentProject.color
      }, 50)
      setTimeout(() => {
        this.transitionEnd = true
      }, 100)
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
  
  

</style>
