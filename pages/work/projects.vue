<template>
  
  <!--  'ready' will be set true once data is received -->
  <section>
        
    <!-- Hero -->
    <c-project-hero
      :project="currentProject"
      :color="heroColor">
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
    <nav class="c-project-nav-panels">
      <l-grid>
        <div class="_cell u-1/2@mobile">
          <c-project-nav-panel :project="previousProject" direction="previous"></c-project-nav-panel>
        </div>
        <div class="_cell u-1/2@mobile">
          <c-project-nav-panel :project="nextProject" direction="next"></c-project-nav-panel>
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
import cIcon from '~/components/c-icon'

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
    cProjectNavPanel,
    cProjectHero
  },
  /** Initialize reactive data values */
  data: () => {
    return {
      heroColor: '',
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
  computed: {
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
    /**
     * Set the current, previous and next projects as objects in this componenents data
     * Could be shortened/optimized/split-up fosho
     */
    setProjects: function (to) {
      /** Match the current path with the project.slug to set currentProject  */
      if (to) {
        var currentPath = to.path
      } else {
        currentPath = this.$route.path
      }
      var projectsArray = this.projectsArray

      this.currentProject = projectsArray.find(function (item) {
        if (currentPath.endsWith('/')) {
          return '/work/projects/' + item.slug + '/' === currentPath
        } else {
          return '/work/projects/' + item.slug === currentPath
        }
      })

      this.heroColor = this.currentProject.color

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
    }
  },
  beforeRouteUpdate (to, from, next) {
    var path = to.path
    var project = this.projectsArray.find(function (item) {
      if (path.endsWith('/')) {
        return '/work/projects/' + item.slug + '/' === path
      } else {
        return '/work/projects/' + item.slug === path
      }
    })
    this.heroColor = project.color
    // this.$store.commit('saveColor', this.currentProject.color)
    setTimeout(function () {
      next()
    }, 100)
  },
  /** Get the projects and store then set the local data on initial mount */
  mounted () {
    this.projectsArray = this.$store.state.projectsArray
    this.setProjects()
  }
  // fetch ({store}) {
  //   // getProjects action returns a Promise since it's defined as an async function
  //   // return store.dispatch('getProjects')
  // }
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
