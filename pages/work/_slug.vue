<template>
  <section>
    
    <c-project-navbar :previous="previousProject" :next="nextProject" :current="currentProject"></c-project-navbar>
    <div class="_hero" :style="'background-color:' + currentProject.color" ref="background">
      <l-wrapper>
        <l-grid class="_hero-grid">
          <div class="_cell u-2/5@tablet">
            <div class="_hero-text-wrapper" ref="text">
              
              <f-link
                class="_project-group"
                :externalLink="currentProject.groupLink"
                :class="textClass"
              >
                {{ currentProject.group }}
                <c-icon name="external-link"></c-icon>
              </f-link>

              <h1 class="_project-title" :class="textClass">
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
  computed: {
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
    hexToRgb: function (hex, alpha) {
      hex = hex.replace('#', '')
      var r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16)
      var g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16)
      var b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16)
      if (alpha) {
        var rgba = [r, g, b, alpha]
        return rgba
      } else {
        var rgb = [r, g, b]
        return rgb
      }
    },
    setContrast: function (bgColor) {
      var rgb = this.hexToRgb(bgColor)
      var o = Math.round(((parseInt(rgb[0]) * 299) +
        (parseInt(rgb[1]) * 587) +
        (parseInt(rgb[2]) * 114)) / 1000)
      var textColor = (o > 125) ? 'dark' : 'light'
      console.log(textColor)
      return textColor
    }
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
  }
}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";

  // TEMP
  ._text-dark {
    color: $neutral-100;
  }

  ._text-light {
    color: $neutral-00;
  }

  ._hero {
    width: 100%;
    overflow: hidden;
    z-index: 90;
    position: relative;
    text-align: left;
  }

  ._hero-grid {
    height: $unit-xxl*4;
  }

  ._hero-image-wrapper {
    height: 100%;
    overflow: hidden;
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
      padding: $unit-lg;
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
    @include vr($font-display, $font-size-xxxl);
    text-align: left;
  }

  ._project-group {
    @include vr($font-display, $font-size-xl);
    margin-bottom: $heading-trailer;
    text-decoration: none;
    opacity: .4;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  

</style>
