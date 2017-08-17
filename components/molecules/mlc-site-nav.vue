<template>
  <span class="mlc-site-nav">

    <nav class="__navbar" ref="jsNavbar" :class="cssNavbar">
      <div class="u-wrapper">
        <ul class="__nav-list">
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/projects" v-scroll-to="'#content-top'">
              Projects
            </nuxt-link>
          </li>
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/profile" v-scroll-to="'#content-top'">
              Profile
            </nuxt-link>
          </li>
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/contact" v-scroll-to="'#content-top'">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <div ref="jsRelativePlaceholder" class="__relative-placeholder"></div>

  </span>
</template>


<script>

export default {
  data: () => {
    return {
      navFixed: false
    }
  },
  props: {
    isStyled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    nav () {
      return this.$refs.jsNavbar
    },
    placeholder () {
      return this.$refs.jsRelativePlaceholder
    },
    scrollPosition () {
      return this.$store.state.scrollPosition
    },
    navHeight () {
      return this.nav.clientHeight
    },
    cssNavbar () {
      return {
        's-is-fixed': this.navFixed,
        's-is-styled': this.isStyled
      }
    }
  },
  mounted: function () {
    this.$store.commit('updateNavHeight', this.navHeight)
    this.updateNav()
    this.$bus.$on('isScrolling', () => {
      this.updateNav()
    })
    this.$bus.$on('isResizing', () => {
      this.updateNav()
    })
  },
  methods: {
    fixNav () {
      this.navFixed = true
      this.placeholder.style.height = this.navHeight + 'px'
    },
    unfixNav () {
      this.navFixed = false
      this.placeholder.style.height = 0
    },
    updateNav () {
      var navTop = this.nav.getBoundingClientRect().top + window.scrollY
      var placeholderTop = this.placeholder.getBoundingClientRect().top + window.scrollY

      if (this.navFixed === false) {
        if (this.scrollPosition >= (navTop)) {
          this.fixNav()
        } else {
          this.unfixNav()
        }
      } else if (this.navFixed === true) {
        if (this.scrollPosition <= (placeholderTop)) {
          this.unfixNav()
        }
      }
    }
  }
}

</script>


<style lang="scss" scoped>

/* NOTE
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */

// None


/* Base component class
   ====================================================================== */
.mlc-site-nav {
  z-index: z("site-header", "links");
  position: relative;
}

/* Navbar
   ====================================================================== */

/**
 * 1. Simoulanteously sets the placeholder bar and fixed-state bar as fixed
 * 2. Only set the padding once header becomes fixed (prevents page jumping)
 * 3. Position the bar at the top
 */

.__navbar {
  z-index: z("site-header", "links");
  // transition: background-color .1s ease-in-out;
  width: 100%; /*[3]*/
  top: 0; /*[3]*/
  left: 0; /*[3]*/

  &.s-is-fixed {
    position: fixed; /*[1]*/
    text-align: right;
    
    @include mq($from: tablet) {
      text-align: center;
    }
  }

  &.s-is-styled {
    @include inner-border(bottom, 1px, high);
    background: white;
  }
}

/* Nav Links
   ====================================================================== */
/**
 * 1. Remove default left/bottom margin applied to <ul>
 * 2. Basic alignment and margins
 * 3. Set the font size for different breakpoints (maintaining
      vertial rhythm)
 * 2. Style and position the markers next to each link
 */

.__nav-list {
  margin-left: 0; /*[1]*/
  margin-bottom: 0; /*[1]*/

  // &.s-is-fixed {
  //   position: fixed;
  //   top: $navbar-padding;
  //   right: $navbar-padding;
  // }
}


.__nav-item {
  display: inline-block; /*[2]*/
  @include mq($from: mobile, $until: desktop) {
    &:last-of-type {
      margin-right: $navbar-padding/2;
    }
  }
}


.__nav-link {
  @include vr($font-body, $font-size-sm);
  @include vr-reset;
  text-decoration: none;
  color: $neutral-60;
  padding: $navbar-padding $navbar-padding/2;
  display: block;
  position: relative;

  @include mq($from: desktop) {
    @include vr($font-body, $font-size-md);
    @include vr-reset;
    padding: $navbar-padding;
    position: relative;
  }

  &:before {
    content: '';
    position: relative; /*[4]*/
    display: inline-block; /*[4]*/
    background-color: $neutral-80; /*[4]*/
    width: .8em; /*[4]*/
    height: .8em; /*[4]*/
    margin-right: $unit-xs; /*[4]*/
    transition: background-color .2s ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    // left: 0;
    bottom: 0;
    transition: width .2s ease;
    transform: translateX(-50%);
    left: 50%;
  }

  &:hover {
    color: $neutral-100;
    &:before {
      background-color: $neutral-100; /*[4]*/
    }
    &:after {
      width: 100%;
      background-color: $neutral-100;
    }
  }

  &.nuxt-link-active {
    color: $blue;

    &:before {
      background-color: $blue; /*[4]*/
    }

    &:after {
      width: 100%;
      background-color: $blue;
    }
  }
}
</style>
