<template>
  <div class="c-project-navbar">
    <nav class="_actual">
      <l-wrapper>
        <l-grid>
          
          <!-- PREVIOUS -->
          <nuxt-link
            :to="previous.slug"
            class="
              _previous-control-wrapper
              _cell
              u-1/3 u-1/5@tablet
            "
          >
            <c-icon class="_icon" name="arrow-left"></c-icon>
            <span>Previous <span class="_string-project">project</span></span>
          </nuxt-link><!--END previous -->
          
          <!-- NEXT -->
          <nuxt-link
            :to="next.slug"
            class="
              _next-control-wrapper
              _cell
              u-1/3 u-1/5@tablet
            "
          >
            <span>Next <span class="_string-project">project</span></span>
            <c-icon class="_icon" name="arrow-right"></c-icon>
          </nuxt-link><!--END next -->
          
          <!-- SPACER -->
          <div class="u-2/5@tablet"></div>

          <!-- CLOSE -->
          <nuxt-link
            @click.native="setScrollTo"
            :to="'/work'"
            class="
              _close-control-wrapper
              _cell
              u-1/3 u-1/5@tablet
            "
          >
            <span>Close</span>
            <c-icon class="_icon" name="close"></c-icon>
          </nuxt-link><!--END close -->

          <div class="_cell u-0  u-2/5@tablet"></div>
          <div class="_cell u-1/3  u-1/5@tablet"></div>
        </l-grid>
      </l-wrapper>
    </nav>
    <div class="_placeholder"></div>
  </div>
  
</template>

<script>
  import lGrid from '~/components/layout/l-grid'
  import lWrapper from '~/components/layout/l-wrapper'
  import cIcon from '~/components/c-icon'

  export default {
    components: {
      lGrid,
      lWrapper,
      cIcon
    },
    props: {
      current: {
        type: Object
      },
      next: {
        type: Object
      },
      previous: {
        type: Object
      }
    },
    methods: {
      setScrollTo: function () {
        this.$store.commit('setScrollTo', '#' + this.current.slug)
      }
    }
  }
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";
  
  $navbar-padding-y: $unit-xs;
  $navbar-inner-height: $unit-md;
  $navbar-height: $navbar-padding-y*2 + $navbar-inner-height;

  ._placeholder {
    height: $navbar-height
  }
  ._actual {
    padding-top: $navbar-padding-y;
    padding-bottom: $navbar-padding-y;
    background-color: rgba($neutral-100, .5);
    position: fixed;
    top: $header-primary-height;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: inset 0 -1px 0 0 $neutral-90;
  }
  ._close-control-wrapper,
  ._previous-control-wrapper,
  ._next-control-wrapper {
    @include vr($font-body, $font-size-md);
    @include vr-reset;
    font-weight: $font-weight-semi;
    color: $neutral-00;
    text-decoration: none;
  }

  ._previous-control-wrapper {
    text-align: left;
    
    ._icon {
      margin-right: $unit-xs;
    }
  }

  ._string-project {
    color: $neutral-30;
    font-weight: $font-weight-regular;
    @include mq($until: desktop) {
      display: none;
    }
  }

  ._close-control-wrapper,
  ._next-control-wrapper {
    text-align: right;
    
    ._icon {
      margin-left: $unit-xs;
    }
  }

  ._close-control-wrapper {
  }

  ._close-control-wrapper {

  }

  ._icon {
    color: $red;
    height: 1em;
    vertical-align: middle;
  }

</style>
