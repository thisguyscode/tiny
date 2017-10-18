<template>
  <nav class="c-project-navbar" :style="'background-color:' + color" :class="baseClass">
    <l-wrapper>
      <l-grid>
        
        <!-- PREVIOUS -->
        <nuxt-link
          :to="'/work/projects/' + previous.slug"
          :class="linkClass"
          class="
            _link
            _previous-control-wrapper
            _cell
            u-1/3 u-1/5@tablet
          "
        >
          <span class="_link-text o-text u-vr-reset">
            <c-icon class="_icon" name="arrow-left"></c-icon>
            <span>
              Previous <span class="_string-project">project</span>
            </span>
          </span>
        </nuxt-link><!--END previous -->
        
        <!-- NEXT -->
        <nuxt-link
          :to="'/work/projects/' + next.slug"
          :class="linkClass"
          class="
            _link
            _next-control-wrapper
            _cell
            u-1/3 u-1/5@tablet
          "
        >
          <span class="_link-text o-text u-vr-reset">
            <span>
              Next <span class="_string-project">project</span>
            </span>
            <c-icon class="_icon" name="arrow-right"></c-icon>
          </span>
        </nuxt-link><!--END next -->
        
        <!-- SPACER -->
        <div class="u-2/5@tablet"></div>

        <!-- CLOSE -->
        <nuxt-link
          @click.native="setScrollTo"
          :class="linkClass"
          :to="'/work'"
          class="
            _link
            _close-control-wrapper
            _cell
            u-1/3 u-1/5@tablet
          "
        >
          <span class="_link-text o-text u-vr-reset">
            <span>Close</span>
            <c-icon class="_icon" name="close"></c-icon>
          </span>
        </nuxt-link><!--END close -->

        <div class="_cell u-0  u-2/5@tablet"></div>
        <div class="_cell u-1/3  u-1/5@tablet"></div>
      </l-grid>
    </l-wrapper>
  </nav>
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
      color: {
        type: String
      },
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
    computed: {
      baseClass: function () {
        return {
          'dark': this.current.contrastingColor === 'dark',
          'light': this.current.contrastingColor === 'light'
        }
      },
      linkClass: function () {
        return {
          'disabled': !this.current.contrastingColor,
          '_text-dark': this.current.contrastingColor === 'dark',
          '_text-light': this.current.contrastingColor === 'light'
        }
      }
    },
    methods: {
      setScrollTo: function () {
        this.$store.commit('setScrollTo', this.current.slug)
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  
  
  $navbar-padding-y: $unit-xs;
  $navbar-inner-height: $unit-md;
  $navbar-height: $navbar-padding-y*2 + $navbar-inner-height;

  .c-project-navbar {
    // background-color: rgba($neutral-100, .5);
    // position: fixed;
    // top: $header-primary-height;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: box-shadow .8s ease, background-color .8s ease;
    &.dark {
      box-shadow: inset 0 1px 0 0 rgba($neutral-100, .2);
    }
    &.light {
      box-shadow: inset 0 1px 0 0 rgba($neutral-00, .2);
    }
  }
  ._link {
    margin-top: 1px;
    margin-bottom: -1px;
    padding-top: $navbar-padding-y;
    padding-bottom: $navbar-padding-y;
    color: $neutral-100;
    transition: color .8s ease;
    text-decoration: none;
    // transition: padding .2s ease;
    &.disabled {
      pointer-events: none;
    }
    &:hover {
      padding-left: $unit-sm;
      padding-right: $unit-sm;
        &._text-dark {
          background-color: rgba($darkest, .1)
        }

        &._text-light {
          background-color: rgba($lightest, .1)
        }
    }
  }

  ._link-text {
    font-weight: $font-weight-semi;
  }

  ._previous-control-wrapper {
    text-align: left;
    
    ._icon {
      margin-right: $unit-xs;
    }
  }

  ._string-project {
    opacity: .7;
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
    // color: $clr-primary;
    height: 1em;
    vertical-align: middle;
  }

  ._text-dark {
    color: $darkest;
  }

  ._text-light {
    color: $lightest;
  }

</style>
