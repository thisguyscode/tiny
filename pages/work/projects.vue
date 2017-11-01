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
      :z="9999"
      fullWidth
      class="p-projects__navbar"
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
      <l-main-content class="p-projects__main-content">
        <l-wrapper>
          <nuxt-child></nuxt-child>
        </l-wrapper>
      </l-main-content>
    
    </div>

    <!-- Bottom Nav -->
    <div class="p-projects__nav-panels-wrapper">
      <nav class="p-projects__nav-panels">
        <!-- <l-wrapper> -->
          <l-grid spacing="xs">
            <div class="p-projects__nav-panel p-projects__nav-panel--previous  l-grid__cell u-1/2@mobile">
              <c-project-nav-panel :transitionEnd="transitionEnd" :project="previousProject" direction="previous"></c-project-nav-panel>
            </div>
            <div class="p-projects__nav-panel p-projects__nav-panel--next  l-grid__cell u-1/2@mobile">
              <c-project-nav-panel :transitionEnd="transitionEnd" :project="nextProject" direction="next"></c-project-nav-panel>
            </div>
          </l-grid>
        <!-- </l-wrapper> -->
      </nav>
    </div>
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
      transitionEnd: true,
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
      if (to) {
        var currentPath = to.path
      } else {
        currentPath = this.$route.path
      }

      var projectsArray = this.$store.state.projectsArray
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

      this.$store.commit('setCurrentColor', currentProject.color)
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
        this.transitionEnd = false
        this.projectColor = this.getNextColor(to)
      }, 0)
      setTimeout(() => {
        this.setProjects(to)
        this.transitionEnd = true
      }, 500)
    }
  },
  /** Get the projects and store then set the local data on initial mount */
  mounted () {
    setTimeout(() => {
      this.setProjects()
      this.projectColor = this.currentProject.color
      window.scrollTo(0, 0)
    }, 0)
  }
}
</script>

<style lang="scss" scoped>

.p-projects {

}

.p-projects__navbar {
  z-index: 2000;
}

.p-projects__main-content {
  position: relative;
  padding-top: $unit-xxl;
  padding-bottom: $unit-xxl;
  text-align: left;
  // background-color: rgba($neutral-00, .9);
}

.p-projects__nav-panels-wrapper {
  position: relative;
  background-color: $neutral-00;
  text-align: center;
  padding: $unit-sm;
  box-shadow: inset 0 1px 0 0 $neutral-80;
  @include mq($from: mobile) {
    padding: $unit-xs;
  }
}


.p-projects__nav-panels {
  max-width: $content-max-width;
  margin-left: auto;
  margin-right: auto;
}


.p-projects__nav-panel {
  @include mq($until: mobile) {
    margin-bottom: $unit-sm;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

</style>
