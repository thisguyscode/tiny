<template>
  <l-header-primary>
    <nav class="c-site-header">
      <ul class="__nav-list">
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/" v-scroll-to="'#content-top'">
              ./tiny/
            </nuxt-link>
          </li>
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
    </nav>
  </l-header-primary>
</template>

<script>
import lHeaderPrimary from '~/components/layout/l-header-primary'
import lHeaderLinks from '~/components/layout/l-header-links'
export default {
  components: {
    lHeaderPrimary,
    lHeaderLinks
  }
}
</script>

<style lang="scss" scoped>
  .c-site-header {
    //
  }
</style>
