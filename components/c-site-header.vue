<template>
  <l-header-primary>
    
    <c-gridlines></c-gridlines>

    <nav class="c-navbar-primary">
      <l-wrapper>
        <ul class="l-grid  l-grid--flush  u-vr-reset">

          <!-- LOGO -->
          <li class="l-grid__cell  u-1/4  u-2/5@mobile">
            <nuxt-link class="_link" to="/" v-scroll-to="'#page-top'">
              <span class="_link-text">
                <span class="u-text--lowest-contrast">./</span>
                <span>tiny</span>
                <span class="u-text--lowest-contrast">/</span>
              </span>
            </nuxt-link>
          </li><!--END- LOGO -->

          <li class="l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile">
            <nuxt-link class="_link" to="/profile" v-scroll-to="'#page-top'">
              <span class="_link-text">
                profile
              </span>
            </nuxt-link>
          </li>

          <li class="l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile">
            <nuxt-link class="_link" to="/work" v-scroll-to="'#page-top'">
              <span class="_link-text">
                work
              </span>
            </nuxt-link>
          </li>

          <li class="l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile">
            <nuxt-link class="_link" to="/contact" v-scroll-to="'#page-top'">
              <span class="_link-text">
                contact
              </span>
            </nuxt-link>
          </li>
        </ul>
      </l-wrapper>
    </nav>
  </l-header-primary>
</template>

<script>
import cGridlines from '~/components/c-gridlines'
import lHeaderPrimary from '~/components/layout/l-header-primary'
import lWrapper from '~/components/layout/l-wrapper'
export default {
  components: {
    lHeaderPrimary,
    cGridlines,
    lWrapper
  }
}
</script>

<style lang="scss" scoped>

  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-navbar-primary {
    @if ($show-baseline == true) {
      @include vr-baseline;
      background-attachment: scroll;
    }
    background-color: $neutral-95;
    box-shadow: inset 0 -1px 0 0 $red;
  }

  ._link {
    width: 100%;
    padding-top: $header-primary-padding-top;
    padding-bottom: $header-primary-padding-bottom;
    color: $neutral-40;
    text-decoration: none;
    margin-bottom: 1px;
    margin-top: -1px;

    &.nuxt-link-active {
      color: $neutral-00; 
    }

    &:not(.nuxt-link-exact-active) {
      transition: background-color .2s ease, padding .2s ease;
    }
    
    &.nuxt-link-exact-active {
      transition: background-color .2s ease, padding .2s ease;
    }

    &:hover {
      &.nuxt-link-exact-active {
        padding-right: $unit-sm;
        padding-left: $unit-sm;
        background-color: rgba($neutral-100, .5);
        ._link-text {
          transform: translateY(-$unit-xs);
        }
      }
    }

    &:hover:not(.nuxt-link-exact-active) {
      padding-right: $unit-sm;
      padding-left: $unit-sm;
      background-color: rgba($neutral-100, .5);
    }
  }

  ._link-text {
    @include vr($font-display, $font-size-md);
    font-weight: $font-weight-semi;
    display: inline-block;
    transition: transform .2s ease;
  }

</style>
