<template>
  <section class="p-work">
    
    <nuxt-child :key="$route.path"></nuxt-child>
    
    <aside>
      <c-cta-panel
        mainCtaHeading="Looking to hire an interface designer?"
        mainCtaBodyText="I’m looking for a full-time job, ideally remote, where I can continue to improve as a digital interface designer"
        mainCtaButton="contact"
        subCtaHeading="Or get to know me"
        subCtaButton="profile">
      </c-cta-panel>
    </aside>
    
  </section>
</template>


<script>
  import cCtaPanel from '~/components/c-cta-panel'
  export default {
    components: {
      cCtaPanel
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
      setColorContrast: function () {
        var projects = this.$store.state.projectsArray
        var array = []
        for (var project in projects) {
          projects[project].contrastingColor = this.setContrast(projects[project].color)
          array.push(projects[project])
        }
        this.$store.commit('setProjectsArray', array)
      }
    },
    mounted () {
      this.$store.dispatch('getProjects')
      this.setColorContrast()
    },
    fetch ({store}) {
      // getProjects action returns a Promise since it's defined as an async function
      return store.dispatch('getProjects')
    }
  }
</script>


<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";
</style>
