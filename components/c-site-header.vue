<template>
  <l-header-primary>
    
    <c-gridlines></c-gridlines>

    <nav class="c-navbar-primary">
      <l-wrapper>
        <ul class="l-grid  l-grid--flush  u-vr-reset">

          <!-- LOGO -->
          <li class="l-grid__cell  u-2/5">
            <nuxt-link class="_link" to="/">
              <span class="u-text--lowest-contrast">./</span>
              <span>tiny</span>
              <span class="u-text--lowest-contrast">/</span>
            </nuxt-link>
          </li><!--END- LOGO -->

          <li class="l-grid__cell  u-text--align-right  u-1/5">
            <nuxt-link class="_link" to="/profile">
              profile
            </nuxt-link>
          </li>

          <li class="l-grid__cell  u-text--align-right  u-1/5">
            <nuxt-link class="_link" to="/work">
              work
            </nuxt-link>
          </li>

          <li class="l-grid__cell  u-text--align-right  u-1/5">
            <nuxt-link class="_link" to="/contact">
              contact
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
    @include vr($font-display, $font-size-md);
    line-height: $header-primary-inner-height;
    padding-top: $header-primary-padding-top;
    padding-bottom: $header-primary-padding-bottom;
    color: $neutral-40;
    text-decoration: none;

    &.nuxt-link-active {
      color: $neutral-00;
    }
  }

</style>
