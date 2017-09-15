<template>

  <nav class="c-project-navbar">
    <l-wrapper>
      <l-grid>
        
        <nuxt-link
          to="/"
          class="
            _previous-control-wrapper
            _cell
            u-1/3 u-1/5@tablet
          "
        >
          <c-icon name="arrow-left"></c-icon>
          <span>Previous project</span>
        </nuxt-link>

        <nuxt-link
          to="/"
          class="
            _next-control-wrapper
            _cell
            u-1/3 u-1/5@tablet
          "
        >
          <span>Next project</span>
          <c-icon name="arrow-right"></c-icon>
        </nuxt-link>
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
    }
  }
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-project-navbar {
    padding-top: $unit-sm;
    padding-bottom: $unit-sm;
  }

  ._previous-control-wrapper,
  ._next-control-wrapper {
    @include vr($font-body, $font-size-sm);
  }

  ._previous-control-wrapper {
    text-align: left;
  }

  ._next-control-wrapper {
    text-align: right;
  }

  ._close-control-wrapper {

  }

</style>
