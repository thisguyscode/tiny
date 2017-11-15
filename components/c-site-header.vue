<template>
  <l-header-primary class="c-site-header">
    
    <c-baselines></c-baselines>

    <nav class="c-site-header__nav">
      <l-wrapper>
        
        <ul class="o-grid o-grid--flush o-list-bare">

          <!-- LOGO -->
          <li class="o-grid__cell  u-1/4  u-2/5@mobile" v-scroll-to="'#page-top'">
            <c-link
              relativeLink="/"
              class="c-site-header__logo-wrapper">
              <c-logo class="c-site-header__logo" size="md"></c-logo>
              <span class="u-hidden-visually">Back to home</span>
            </c-link>
          </li><!--END- LOGO -->

          <li class="c-site-header__link-wrapper  o-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile" v-scroll-to="'#page-top'">
            <c-link
              relativeLink="/work/"
              class="c-site-header__link">
              <span class="c-site-header__link-text  o-text o-text--sm">work</span>
            </c-link>
          </li>

          <li class="c-site-header__link-wrapper  o-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile" v-scroll-to="'#page-top'">
            <c-link
              relativeLink="/profile/"
              class="c-site-header__link">
              <span class="c-site-header__link-text  o-text o-text--sm">profile</span>
            </c-link>
          </li>

          <li class="c-site-header__link-wrapper  o-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile" v-scroll-to="'#page-top'">
            <c-link
              relativeLink="/contact/"
              class="c-site-header__link">
              <span class="c-site-header__link-text  o-text o-text--sm">contact</span>
            </c-link>
          </li>


        </ul>
      </l-wrapper>
    </nav>
  </l-header-primary>
</template>

<script>
import cLogo from '~/components/c-logo'
import lHeaderPrimary from '~/components/layout/l-header-primary'
export default {
  components: {
    lHeaderPrimary,
    cLogo
  }
}
</script>

<style lang="scss" scoped>

/* Base class
======================================================================== */
// .c-site-header {
// }


/* Child classes
======================================================================== */

.c-site-header__nav {
  transition: border-color .2s ease;
  background-color: $neutral-100;
  border-bottom: 1px solid $neutral-00;
  border-top: 1px solid $neutral-00;
  margin-top: -1px;
  }

.c-site-header__link,
.c-site-header__logo-wrapper {
  display: block;
  padding-top: $unit-md;
  padding-bottom: $unit-md - $unit-sm;
  width: 100%;
  text-decoration: none;
}

.c-site-header__logo-wrapper {
  height: 100%;
  overflow: hidden;
  &:hover {
    background-color: rgba($neutral-00, .05);
    > .c-site-header__logo {
      transform: scale(1.4);
    }
  }
}

.c-site-header__logo {
  width: 100%;
  transition: transform .1s ease;
  transform-origin: 0 40%;
}


.c-site-header__link {
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: $unit-md;
    bottom: $unit-md;
    background-color: $neutral-80;
  }
}
.c-site-header__link-wrapper {
  > .c-site-header__link {
    &:before {
      left: 0;
      width: 1px;
    }
  }
  &:last-of-type {
    > .c-site-header__link {
      &:after {
        right: 0;
        width: 1px;
      }
    }
  }
}


.c-site-header__link-text {
  font-weight: $font-weight-semi;
  display: inline;
  position: relative;
}

.c-site-header__link {
  transition: color .3s ease;
  color: $neutral-30;
  text-align: center;

  &.nuxt-link-active {
    &:not(.c-site-header__logo-wrapper) {
      > .c-site-header__link-text {
        background-color: $neutral-00;
        color: $neutral-100;
      }
    }
  }
  &:hover {
    background-color: rgba($neutral-00, .05);
  }
}
</style>
