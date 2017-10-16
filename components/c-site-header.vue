<template>
  <l-header-primary>
    
    <c-baselines></c-baselines>
    <c-gridlines></c-gridlines>

    <nav class="c-navbar-primary">
      <l-wrapper>
        <ul class="l-grid  l-grid--flush  u-vr-reset">

          <!-- LOGO -->
          <li class="l-grid__cell  u-1/4  u-2/5@mobile">
            <nuxt-link class="_link _logo-link left" to="/">
              <span class="_link-text">
                <span class="u-text--lowest-contrast">./</span>
                <span>tiny</span>
                <span class="u-text--lowest-contrast">/</span>
              </span>
            </nuxt-link>
          </li><!--END- LOGO -->

          <li class="l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile">
            <nuxt-link class="_link" to="/profile">
              <span class="_link-text">
                profile
              </span>
            </nuxt-link>
          </li>

          <li class="l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile">
            <nuxt-link class="_link" to="/work">
              <span class="_link-text">
                work
              </span>
            </nuxt-link>
          </li>

          <li class="l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile">
            <nuxt-link class="_link" to="/contact">
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
import cBaselines from '~/components/c-baselines'
import lHeaderPrimary from '~/components/layout/l-header-primary'
import lWrapper from '~/components/layout/l-wrapper'
export default {
  components: {
    lHeaderPrimary,
    cGridlines,
    cBaselines,
    lWrapper
  }
}
</script>

<style lang="scss" scoped>

  // Import variables and global settings
  

  .c-navbar-primary {
    overflow: hidden;
    // @if ($show-baseline == true) {
    //   @include vr-baseline;
    //   background-attachment: scroll;
    // }
    background-color: $neutral-95;
    box-shadow: inset 0 -1px 0 0 $clr-primary;
  }

  ._link {
    &:not(._logo-link) {
      @include mq($until: tablet) {
        text-align: center;
      }
    }
    width: 100%;
    padding-top: $header-primary-padding-top;
    padding-bottom: $header-primary-padding-bottom;
    color: $neutral-40;
    text-decoration: none;
    margin-bottom: 1px;
    margin-top: -1px;
    position: relative;
    transition: background-color .2s ease, box-shadow .2s ease;
    
    &:before {
      content: '';
      position: absolute;
      top: $unit-md;
      // transition: width .2s ease;
      width: 0;
      bottom: $unit-md;
      background-color: $green;
    }
    &.left {
      &:before {
        left: 0;
        right: auto;
      }
    }

    @include mq($until: tablet) {
      &:before {
        left: 0;
        right: 0;
      }
    }
    @include mq($from: tablet) {
      &:before {
        right: 0;
        left: auto;
      }
    }

    
    &.nuxt-link-active {
      color: $neutral-00;
    }

    &:hover {
      color: contrasting-color($green, $lightest, $darkest)
    }

    &.nuxt-link-exact-active {
      &:before {
        background-color: $clr-primary;
      }
      @include mq($from: desktop) {
        box-shadow: inset -1px 0 0 0 $clr-primary;
        &.left {
          box-shadow: inset 1px 0 0 0 $clr-primary;
        }
      }
    }
    &:hover,
    &.nuxt-link-exact-active {
      @include mq($until: tablet) {
        &:before {
          width: 100%;
        }
      }
      @include mq($from: tablet) {
        &:before {
          width: 90%;
        }
      }
      @include mq($from: desktop) {
        padding-right: $unit-md;
        &:before {
          width: $unit-sm;
        }
        &.left {
          padding-right: 0;
          padding-left: $unit-md;
        }
      }
    }
  }

  ._link-text {
    @include vr($font-display, $font-size-md);
    font-weight: $font-weight-semi;
    display: inline-block;
    transition: transform .2s ease;
  }

</style>
