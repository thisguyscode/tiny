<template>
  <nav class="c-profile-navbar">
    <l-wrapper>
      <div class="o-grid o-grid--flush">

        <c-link
          v-for="link in links" :key="link.id"
          :scrollToSelector="link.to"
          class="
            c-profile-navbar__link
            o-grid__cell
            u-1/5
          "
          >
          <span class="c-profile-navbar__link-text  o-text  u-vr-reset">{{ link.name }}</span>
        </c-link>

      </div>
    </l-wrapper>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          name: 'Hard Skills',
          to: '#hard-skills'
        },
        {
          name: 'Soft Skills',
          to: '#soft-skills'
        },
        {
          name: 'Testimonials',
          to: '#testimonials'
        },
        {
          name: 'Design Process',
          to: '#design-process'
        },
        {
          name: 'Fantasies',
          to: '#fantasies'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Variables (redefine global variable dependencies)
======================================================================== */
// Layout
$navbar-padding-y:         $unit-xs;
$navbar-inner-height:      $unit-md;
$navbar-height:            $navbar-padding-y*2 + $navbar-inner-height;

// Cosmetic
$background: $semi-transparent-background;
$link-color: $neutral-00;
$dark:       $darkest;
$light:      $lightest;



/* Base class
======================================================================== */
.c-profile-navbar {
  background-color: $background;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: $navbar-height;
  transition: box-shadow .8s ease, background-color .8s ease;
  &.dark {
    box-shadow: inset 0 1px 0 0 rgba($neutral-100, .2);
  }
  &.light {
    box-shadow: inset 0 1px 0 0 rgba($neutral-00, .2);
  }
}


/* Child classes
======================================================================== */
.c-profile-navbar__link {
  padding-top: $navbar-padding-y;
  padding-bottom: $navbar-padding-y;
  color: $link-color;
  transition: color .8s ease;
}

.c-profile-navbar__link-text {
  pointer-events: none;
  font-weight: $font-weight-semi;
}

</style>
