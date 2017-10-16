<template>
  <nav class="c-profile-navbar">
    <l-wrapper>
      <l-grid>
        
        <!-- 1 -->
        <f-link
          :scrollToSelector="'#hard-skills'"
          class="
            _link
            _cell
            u-1/5
          "
        >
          <span class="_link-text">Hard skills</span>
        </f-link><!--END 1 -->

        <!-- 2 -->
        <f-link
          :scrollToSelector="'#soft-skills'"
          class="
            _link
            _cell
            u-1/5
          "
        >
          <span class="_link-text">Soft skills</span>
        </f-link><!--END 2 -->
        
        <!-- 3 -->
        <f-link
          :scrollToSelector="'#testimonials'"
          class="
            _link
            _cell
            u-1/5
          "
        >
          <span class="_link-text">Testimonials</span>
        </f-link><!--END 3 -->

        <!-- 4 -->
        <f-link
          :scrollToSelector="'#process'"
          class="
            _link
            _cell
            u-1/5
          "
        >
          <span class="_link-text">Design process</span>
        </f-link><!--END 4 -->

        <!-- 5 -->
        <f-link
          :scrollToSelector="'#fantasies'"
          class="
            _link
            _cell
            u-1/5
          "
        >
          <span class="_link-text">Fantasies</span>
        </f-link><!--END 5 -->
        
      </l-grid>
    </l-wrapper>
  </nav>
</template>

<script>
  import lGrid from '~/components/layout/l-grid'
  import fLink from '~/components/functional/f-link'
  import lWrapper from '~/components/layout/l-wrapper'
  import cIcon from '~/components/c-icon'

  export default {
    components: {
      lGrid,
      fLink,
      lWrapper,
      cIcon
    }
  }
</script>

<style lang="scss" scoped>
  
  
  
  $navbar-padding-y: $unit-xs;
  $navbar-inner-height: $unit-md;
  $navbar-height: $navbar-padding-y*2 + $navbar-inner-height;

  .c-profile-navbar {
    background-color: rgba($neutral-100, .5);
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
    color: $neutral-00;
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
    @include vr($font-body, $font-size-md);
    @include vr-reset;
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
