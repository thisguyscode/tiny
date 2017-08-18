<template>

  <div class="p-profile">

      <nav class="c-navbar-primary  l-fixed-primary">
        <div class="l-wrapper">
          <ul class="l-grid  l-grid--flush  u-vr-reset">

            <!-- LOGO -->
            <li class="l-grid__cell  u-2/5">
              <nuxt-link class="c-navbar-primary__link" to="/">
                <span>./</span>
                <span>tiny</span>
                <span>/</span>
              </nuxt-link>
            </li><!--END- LOGO -->

            <li class="l-grid__cell  u-text--align-right  u-1/5">
              <nuxt-link class="c-navbar-primary__link" to="/">
                profile
              </nuxt-link>
            </li>

            <li class="l-grid__cell  u-text--align-right  u-1/5">
              <nuxt-link class="c-navbar-primary__link" to="/">
                work
              </nuxt-link>
            </li>

            <li class="l-grid__cell  u-text--align-right  u-1/5">
              <nuxt-link class="c-navbar-primary__link" to="/">
                contact
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    
    <div class="l-content">
      <div class="l-wrapper">

        <h1>profile</h1>
        <h2>profile</h2>
        <h3>profile</h3>
        <h4 class="u-margin-bottom">profile</h4>
        <p>Testing testing testing</p>
        <p>Testing testing testing</p>
      
      </div>

      <div class="_filler"></div>

    </div>
  </div>

</template>

<script>
  export default {
    scrollToTop: false,
    layout: 'default',
    components: {}
  }

</script>

<style lang="scss" scoped>
  @import "~assets/styles/imports";
  .p-profile {
    text-align: left;
  }

  ._filler {
    height: 2000px;
  }
  
  .c-navbar-primary {
    @if ($show-baseline == true) {
      @include vr-baseline;
    }
    background-color: $neutral-95;
    box-shadow: inset 0 -1px 0 0 $red;
  }

  .c-navbar-primary__link {
    @include vr($font-display, $font-size-md);
    padding-top: $unit-md;
    padding-bottom: $unit-sm;
  }

  .l-content {
    padding-top: $unit-xxl*2;
  }
  .l-fixed-primary {
    z-index: z("sticky", "primary");
    height: $unit-md + $unit-sm + $unit-md;
    position: fixed;
    width: 100%;
  }

</style>
