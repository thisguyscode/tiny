<template>
  <div class="mlc-project-overview">
    
    <!-- WAYPOINT -->
    <div class="__waypoint-wrapper">
      <div class="__waypoint" ref="jsWaypointTop">
        <mlc-waypoint :waypoint="this.waypointHeaderTop"></mlc-waypoint>
      </div>
    </div>
    
    <div class="__header-mock-bar" :class="cssHeaderMockBar">
      <div class="u-wrapper">
        
        <!-- header  -->
        <div class="__header" ref="jsHeader" :style="'box-shadow: inset 0 -1px 0 0' + this.color + ';'">
          <div class="__header__cell">
            <span class="__header__index"> 
              <svg :style="'fill: ' + this.color + ';'"
                    v-html="require('!svg-inline-loader?removeSVGTagAttrs=false!~assets/images/letters/' + String.fromCharCode(97 + index) + '.svg')"
              ></svg>
            </span>
          </div>
          <div class="__header__cell">
            <h3 class="__header__title" :style="'color:' + this.color + ';'">{{ project.name }}</h3>
          </div>
          <div class="__header__cell  u-hide-mobile-tablet">
            <p class="__header__label" :style="'color:' + this.color + ';'">Role</p>
            <h4 class="__header__role">{{ project.role }}</h4>
          </div>
          <div class="__header__cell  u-hide-mobile-tablet">
            <p class="__header__label" :style="'color:' + this.color + ';'">Date</p>
            <h4 class="__header__date">{{ project.date }}</h4>
          </div>
          <div class="__header__cell  __header__button-wrapper">
            <nuxt-link to="/" class="__header__button" :style="'background-color:' + this.color + ';'">
              <mlc-icon class="__header__button__icon" name="chevron-right"></mlc-icon>
            </nuxt-link>
          </div>
          <nuxt-link :to="project.linkTo" v-scroll-to="'#page-top'">
            <span class="u-link-bloater"></span>
          </nuxt-link>
        </div><!--END header -->
      </div>
    </div>

    <!-- RELATIVE PLACEHOLDER  -->
    <div class="__header-relative-placeholder" ref="jsHeaderRelativePlaceholder"></div>

    <img class="__image" :src="project.imgSrc"/>

    <nuxt-link :to="project.linkTo" v-scroll-to="'#page-top'">
      <span class="u-link-bloater"></span>
    </nuxt-link>
    
    <div class="__waypoint-wrapper">
      <div class="__waypoint __waypoint-bottom" ref="jsWaypointBottom">
        <mlc-waypoint :waypoint="this.waypointHeaderBottom"></mlc-waypoint>
      </div>
    </div>

  </div>
</template>

<script>
import mlcIcon from '~components/molecules/mlc-icon'
import mlcWaypoint from '~components/molecules/mlc-waypoint'
export default {
  components: {
    mlcIcon,
    mlcWaypoint
  },
  data: () => {
    return {
      headerIsFixed: false
    }
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      default: '#AAA'
    }
  },
  computed: {
    cssHeaderMockBar: function () {
      return {
        's-is-fixed': this.headerIsFixed
      }
    },
    scrollPosition () {
      return this.$store.state.scrollPosition
    },
    header () {
      return this.$refs.jsHeader
    },
    headerHeight () {
      return this.header.clientHeight
    },
    navHeight () {
      return this.$store.state.navHeight
    },
    placeholder () {
      return this.$refs.jsHeaderRelativePlaceholder
    },
    waypointTop () {
      return this.$refs.jsWaypointTop.getBoundingClientRect().top + window.scrollY + this.navHeight
    },
    waypointBottom () {
      return this.$refs.jsWaypointBottom.getBoundingClientRect().top + window.scrollY + this.navHeight
    }
  },
  mounted () {
    this.setHeader()
    this.$bus.$on('isResizing', () => {
      this.setHeader()
    })
  },
  methods: {
    fixHeader () {
      this.headerIsFixed = true
      this.placeholder.style.height = this.headerHeight + 'px'
    },
    unfixHeader () {
      this.headerIsFixed = false
      this.placeholder.style.height = 0
    },
    hideHeader () {
      this.header.style.top = -(this.headerHeight) + 'px'
    },
    unhideHeader () {
      this.header.style.top = 0
    },
    setHeader () {
      if (this.scrollPosition >= (this.waypointTop)) {
        this.fixHeader()
      } else if (this.scrollPosition <= (this.waypointTop)) {
        this.unfixHeader()
      }
      if (this.scrollPosition >= (this.waypointBottom)) {
        this.hideHeader()
      } else if (this.scrollPosition <= (this.waypointBottom)) {
        this.unhideHeader()
      }
    },
    waypointHeaderTop (direction, going) {
      if (going === 'in' && direction.y === 'up') {
        this.unfixHeader()
      } else if (going === 'out' && direction.y === 'down') {
        this.fixHeader()
      }
    },
    waypointHeaderBottom (direction, going) {
      if (going === 'out' && direction.y === 'down') {
        this.hideHeader()
      } else if (going === 'in' && direction.y === 'up') {
        this.unhideHeader()
      }
    },
    nextChar (c) {
      return String.fromCharCode(c.charCodeAt(0) + 1)
    }
  }
}
</script>

<style lang="scss" scoped>

/* NOTES
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */
$header-padding-y: $unit-lg;
$header-text-height: $font-size-xl;
$header-height: $header-padding-y*2 + $header-text-height;

/* Base component class
   ====================================================================== */
.mlc-project-overview {
  z-index: z("fixed", "high");
  position: relative;
  margin-bottom: $unit-xl;
  padding-top: 0;
  @include mq($from: desktop) {
    // .__image {
      // transition: filter .2s ease-out;
      filter: grayscale(70%);
    // }
    &:hover {
      // .__image {
        filter: grayscale(0);
      // }
    }
  }
}

/* --
   ====================================================================== */

.__header-mock-bar {
  &.s-is-fixed {
    width: 100%;
    z-index: z("fixed", "mid");
    padding-left: $unit-md;
    padding-right: $unit-md;
    position: fixed;
    top: $navbar-height;
    right: 0;

    .__header {
      position: absolute;
      right: 0;
      width: 100%;
      // @include inner-border(bottom, 1px, low);
      
      // display: inline-block;
      
      @include mq($from: desktop) {
        width: 66.6666%;
        // padding-right: $unit-xxl;
      }
    }
  }
}

.__header {
  transition: transform .2s ease, top .2s ease;
  z-index: 15;
  padding-top: $unit-lg;
  padding-bottom: $unit-md;
  text-align: left;
  display: flex;
  // margin-bottom: $unit-lg;
  background: white;

  @include mq($from: mobile, $until: desktop) {
    padding-top: $unit-xxl + $unit-md;
    padding-bottom: $unit-md;
  }
}
.__waypoint-wrapper {
  position: relative;
}

.__waypoint {
  position: absolute;
  top: -$navbar-height;
}

.__waypoint-bottom {
  position: absolute;
  top: -($navbar-height + $header-height);
  // bottom: ($navbar-height + $header-height);
} 


.__header__index {
  svg {
    width: 20px;
    height: 34px;
  }
}

.__header__cell {
  margin-right: $unit-lg;

  &:last-of-type {
    margin-right: 0;
  }
}

.__header__index {
  font-weight: 600;
  // @include vr($font-body, $font-size-xxxl);
}

.__header__title {
  @include vr($font-body, $font-size-md);
  font-weight: 600;
  color: $blue;
  max-width: 220px;
}

.__header__button-wrapper {
  text-align: right;
  position: relative;
  flex-grow: 1;
}
.__header__button {
  position: relative;
  text-align: center;
  display: inline-block;
  background-color: $blue;
  border-radius: 100%;
  width: $unit-lg;
  height: $unit-lg;
  color: white;

  &:hover {
    .__header__button__icon {
      transform: translate(-50%,-50%) scale(1.1);
    }
  }
}

.__header__button__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: 2px;
  transition: transform .2s ease-in-out;
  transform: translate(-50%,-50%) scale(1);
}

.__header__label {
  @include vr($font-body, $font-size-sm);
  @include mq($from: mobile, $until: desktop) {
    display: none;
  }
}


.__header__role,
.__header__date {
  @include vr($font-body, $font-size-sm);
  @include mq($from: mobile, $until: desktop) {
    display: none;
  }
}


.__image {
  margin-bottom: $paragraph-trailer;
}



/* Color variants
   ====================================================================== */

$color-sc-a: $green;
$color-sc-b: $purple;

.socialcops-a {

  .__header__title,
  .__header__label {
    color: $color-sc-a;
  }
  .__header__button {
    background-color: $color-sc-a;
  }
}

</style>
