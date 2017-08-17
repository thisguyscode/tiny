<template>
  <span class="mlc-glasses">

    <!-- FIXED posiion placeholder -->
    <div class="__mock-navbar-placeholder">
      <div class="u-wrapper">
        <div ref="jsfixedPlaceholder" class="__fixed-placeholder"></div>
      </div>
    </div>

    <div class="__waypoint" ref="jsWaypoint">
      <mlc-waypoint :waypoint="waypointGlasses"></mlc-waypoint>
    </div>

    <div class="__mock-navbar" :class="cssGlassesMockNavbar">
      <div class="u-wrapper">
        <div ref="jsGlasses" class="__glasses" :class="cssGlasses">
          <nuxt-link to="/" v-scroll-to="'#page-top'">
            <span class="u-link-bloater"></span>
          </nuxt-link>
          <img src="~assets/images/logo-glasses.svg"/>
        </div>
      </div>
    </div>

    <!-- RELATIVE position placeholder  -->
    <div ref="jsRelativePlaceholder" class="__relative-placeholder"></div>

  </span>
</template>

<script>
import mlcWaypoint from '~components/molecules/mlc-waypoint'
export default {
  components: {
    mlcWaypoint
  },
  data: () => {
    return {
      fixed: false
    }
  },
  computed: {
    cssGlasses: function () {
      return {
        's-is-fixed': this.fixed
      }
    },
    cssGlassesMockNavbar: function () {
      return {
        's-is-fixed': this.fixed
      }
    }
  },
  mounted () {
    this.$store.commit('updateScroll')
    this.setGlasses()
  },
  methods: {
    setGlasses () {
      var scrollPosition = this.$store.state.scrollPosition
      var waypoint = this.$refs.jsWaypoint
      var waypointTop = waypoint.getBoundingClientRect().top + window.scrollY
      if (scrollPosition >= (waypointTop)) {
        this.fixed = true
      } else if (scrollPosition <= (waypointTop)) {
        this.fixed = false
      }
    },
    waypointGlasses (direction, going) {
      var glasses = this.$refs.jsGlasses
      var relative = this.$refs.jsRelativePlaceholder
      var fixed = this.$refs.jsfixedPlaceholder

      var relativeOffsets = relative.getBoundingClientRect()
      var relativeWidth = relativeOffsets.width
      var relativeTop = relativeOffsets.top
      var relativeLeft = relativeOffsets.left

      var fixedOffsets = fixed.getBoundingClientRect()
      var fixedWidth = fixedOffsets.width
      var fixedTop = fixedOffsets.top
      var fixedLeft = fixedOffsets.left
      if (this.fixed) {
        if (going === 'in') {
          glasses.setAttribute('style',
            'position: fixed;' +
            'top: ' + fixedTop + 'px; ' +
            'left: ' + fixedLeft + 'px; ' +
            'width:' + relativeWidth + 'px; ' +
            'transition: transform .3s ease-in-out, width .3s ease-in-out;' +
            'transform: translate(' +
              (relativeLeft - fixedLeft) + 'px,' +
              (relativeTop - fixedTop) + 'px' +
            ');'
          )
          setTimeout(() => {
            glasses.removeAttribute('style')
            this.fixed = false
          }, 300)
        }
      }
      if (going === 'out') {
        glasses.setAttribute('style',
          'position: fixed;' +
          'top: ' + relativeTop + 'px; ' +
          'left: ' + relativeLeft + 'px; ' +
          'width:' + fixedWidth + 'px; ' +
          'margin: 0;' +
          'transition: transform .3s ease-in-out, width .3s ease-in-out;' +
          'transform: translate(' +
            -(relativeLeft - fixedLeft) + 'px,' +
            -(relativeTop - fixedTop) + 'px' +
          ');'
        )
        setTimeout(() => {
          glasses.removeAttribute('style')
          this.fixed = true
        }, 300)
      }
    }
  }
}
</script>


<style lang="scss" scoped>

/* NOTE
** There are various styles being added inline to the glasses as they are
** scrolled past. These styles are removed once the element reaches the end
** of the transition (in both directions).
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */
$glasses-max-width: 264px;


/* Base component class
   ====================================================================== */
.mlc-glasses {
}

/* Mock Navbar
   ====================================================================== */

/**
 * 1. Simoulanteously sets the placeholder bar and fixed-state bar as fixed
 * 2. Only set the padding once header becomes fixed (prevents page jumping)
 * 3. Position the bar at the top
 */

.__mock-navbar {
  z-index: z("site-header", "glasses");
  @at-root .__mock-navbar-placeholder,
  &.s-is-fixed {
    width: 100%;
    padding-left: $navbar-padding;
    padding-right: $navbar-padding;
    position: fixed; /*[1]*/
    top: 0;
    left: 0;
  }
}

.__mock-navbar-placeholder {
  padding: $navbar-padding;
}

.__mock-navbar {
  // z-index: z("mock-navbar");
}


/* Glasses
   ====================================================================== */

/**
 * 1. Take the glasses out of the flow (see __relative-placeholder)
      below for for positioning
 * 2. Simultaneously set the final fixed position/size of the glasses and 
 *    the associated placeholder
 * 3. Remove the centering margins from [4]
 * 4. Center on page
 * 5. Set the width (must be divided by 2 or 4 for pixel-perfect edges)
 * 6. Harcode the placeholder height to reduce amount of js required
 * 7. Set the waypoint (scroll trigger) 1px from the top of the viewport
 */

.__glasses {
  z-index: z("fixed", "highest");
  position: absolute; /*[1]*/
  
  @at-root .__fixed-placeholder,
  &.s-is-fixed {
    width: $glasses-max-width/4; /*[2]*/
    margin: 0; /*[3]*/
  }
}

.__glasses {
  &.s-is-fixed {
    top: $navbar-padding;
  }
}

.__fixed-placeholder {
}

.__glasses,
.__relative-placeholder {
  margin-right: auto; /*[4]*/
  margin-left: auto; /*[4]*/
  left: 0; /*[4]*/
  right: 0; /*[4]*/
  width: $glasses-max-width/2; /*[5]*/

  @include mq($from: desktop) {
    width:  $glasses-max-width; /*[5]*/
  }
}

.__relative-placeholder {
  height: $unit-xxl;

  @include mq($from: desktop) {
    height: $unit-xxl*2;
  }
}

.__waypoint {
  position: absolute; /*[7]*/
  top: 1px; /*[7]*/
}

</style>

