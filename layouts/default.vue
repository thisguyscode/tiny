<template>
  
  <section id="page-top" class="__page">

    <nav class="__navbar" ref="jsNavbar">
      <div class="u-wrapper">
        <ul class="__nav-list">
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/profile" v-scroll-to="'#content-top'">
              Profile
            </nuxt-link>
          </li>
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/work" v-scroll-to="'#content-top'">
              Work
            </nuxt-link>
          </li>
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/contact" v-scroll-to="'#content-top'">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <nuxt/>

  </section>
  
</template>

<script>
export default {
  scrollToTop: false,
  components: {
  },
  data: () => {
    return {
    }
  },
  methods: {
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
