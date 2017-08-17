<template>
  
  <section id="page-top" class="__page">

    <div class="u-wrapper">
      <div class="u-baseline-grid"></div>
    </div>

    <ogm-site-header :contentReached="contentReached"></ogm-site-header>
    <!-- <ogm-temp-nav></ogm-temp-nav> -->
    
    <div class="__content-waypoint-wrapper">
      <mlc-waypoint class="__content-waypoint" :waypoint="waypointContentTop" id="content-top"></mlc-waypoint>
    </div>

    <nuxt/>

    <ogm-site-footer></ogm-site-footer>

  </section>
  
</template>

<script>
import ogmSiteHeader from '~/components/organisms/ogm-site-header'
import ogmSiteFooter from '~/components/organisms/ogm-site-footer'
import mlcWaypoint from '~/components/molecules/mlc-waypoint'

export default {
  scrollToTop: false,
  components: {
    ogmSiteHeader,
    ogmSiteFooter,
    mlcWaypoint
  },
  data: () => {
    return {
      contentReached: false
    }
  },
  methods: {
    waypointContentTop (direction, going) {
      if (going === 'out') {
        this.contentReached = true
      } else {
        this.contentReached = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/imports/imports";

.__page {
  background: $neutral-00;
}

.__content-waypoint-wrapper {
  position: relative;
  height: 0;
}
.__content-waypoint {
  position: absolute;
  top: -$navbar-height;
}

</style>
