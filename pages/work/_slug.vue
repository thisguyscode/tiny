<template>
  <section>
    
    <c-project-navbar :previous="previousProject" :next="nextProject" :current="currentProject"></c-project-navbar>
    <div class="_hero" :style="'background-color:' + currentProject.color" >
      <l-wrapper>
        <l-grid>
          <div class="_cell u-2/5@tablet">
            <div class="_hero-text-wrapper">
              
              <f-link
                class="_project-group"
                :externalLink="currentProject.groupLink"
              >
                {{ currentProject.group }}
                <c-icon name="external-link"></c-icon>
              </f-link>

              <h1 class="_project-title">
                {{ currentProject.name }}
              </h1>

            </div>
          </div>
          <div class="_cell u-3/5@tablet">
            <div class="_hero-image-wrapper" :class="imageWrapperClass">
              <img class="_hero-image" :class="imageClass" :src="require('~/assets/images/' + currentProject.imgSrc)">
            </div>
          </div>
        </l-grid>
      </l-wrapper>
    </div>
    <h2>{{ $route.params.slug }}</h2>
    <h1>{{ currentProject.name }}</h1>
    <h1>{{ currentProject.date }}</h1>
    <h4>{{ previousProject.slug }}</h4>
    <nuxt-child></nuxt-child>


  </section>

</template>

<script>
import fLink from '~/components/functional/f-link'
import lGrid from '~/components/layout/l-grid'
import lWrapper from '~/components/layout/l-wrapper'
import cProjectNavbar from '~/components/c-project-navbar'
import cIcon from '~/components/c-icon'
import dataProjects from '~/data/projects.json'

export default {
  scrollToTop: true,
  components: {
    lGrid,
    fLink,
    lWrapper,
    cIcon,
    cProjectNavbar
  },
  asyncData ({ params }) {
    var projectGroups = dataProjects.projectGroups
    var projectsArray = []
    for (var projectGroup in projectGroups) {
      var projects = projectGroups[projectGroup].projects
      for (var project in projects) {
        projects[project].group = projectGroups[projectGroup].name
        projects[project].groupLink = projectGroups[projectGroup].link
        projectsArray.push(projects[project])
      }
    }
    const currentProject = projectsArray.find(function (item) {
      return item.slug === params.slug
    })

    if (projectsArray.indexOf(currentProject) === projectsArray.length - 1) {
      var nextProjectIndex = 0
    } else {
      nextProjectIndex = projectsArray.indexOf(currentProject) + 1
    }

    if (projectsArray.indexOf(currentProject) === 0) {
      var previousProjectIndex = projectsArray.length - 1
    } else {
      previousProjectIndex = projectsArray.indexOf(currentProject) - 1
    }

    var previousProject = projectsArray[previousProjectIndex]
    var nextProject = projectsArray[nextProjectIndex]

    return {
      currentProject,
      previousProject,
      nextProject
    }
  },
  methods: {
    //
  },
  computed: {
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
  }
}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";

  ._hero {
    width: 100%;
    height: $unit-xxl*4;
    overflow: hidden;
    z-index: 90;
    position: relative;
  }

  ._hero-image-wrapper {
    margin-right: -$page-padding-mobile;
    @include mq($from: tablet) {
      margin-right: -$page-padding-tablet
    }
    @include mq($from: desktop) {
      margin-right: -$page-padding-desktop
    }
    @include mq($from: wide) {
      margin-right: -$page-padding-wide
    }
    &.--padded {
      padding: $unit-xl;
    }
  }

  ._hero-text-wrapper {
    padding-top: $page-padding-mobile;
    padding-bottom: $page-padding-mobile;
    @include mq($from: tablet) {
      padding-top: $page-padding-tablet;
      padding-bottom: $page-padding-tablet;
    }
    @include mq($from: desktop) {
      padding-top: $unit-lg;
      padding-bottom: $unit-lg;
    }
  }

  ._project-title {
    @include vr($font-display, $font-size-xxl);
    text-align: left;
    color: $neutral-00;
  }

  ._project-group {
    @include vr($font-display, $font-size-lg);
    text-decoration: none;
    color: $neutral-00;
    text-align: left;
    opacity: .4;
    cursor: pointer;
    display: block;
    &:hover {
      opacity: 1;
    }
  }

  ._hero-image {
    object-fit: contain;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
    
    &.--cover {
      object-fit: cover;
    }
  }

</style>
