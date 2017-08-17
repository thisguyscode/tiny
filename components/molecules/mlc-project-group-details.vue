<template>
  <section class="mlc-project-group-details" :id="'project-group-top-' + index">
    
    
    <!-- WAYPOINT -->
    <div class="__waypoint" ref="jsWaypointTop">
      <mlc-waypoint :waypoint="this.waypointHeaderTop"></mlc-waypoint>
    </div>
    <!-- HEADER  -->
    <div class="__header-mock-bar" :class="cssHeaderMockBar">
      <div class="u-wrapper">
        <div class="__header" ref="jsHeader">

          <div class="__name-mock-bar" :class="cssNameMockBar">
            <div class="u-wrapper">
              <h3 class="__name">{{ name }}</h3>
            </div>
          </div>

           <div class="__name-relative-placeholder" :class="cssNameRelativePlaceholder"></div> 
          
          <div class="__logo-wrapper  __logo-wrapper--landscape">
            <img class="__logo" :src="logoSrc">
          </div>
          
          <p v-if="link" class="__link-wrapper">
            <a class="__link" :href="link" target="_blank" rel="noopener">
              Visit Website
              <mlc-icon class="__link-icon" name="external-link"></mlc-icon>
            </a>
          </p>
          <div class="__divider"></div> 

          <a href="#" v-scroll-to="'#project-group-top-' + index">
            <span class="u-link-bloater"></span>
          </a>


        </div>
      </div>
    </div><!--END __header -->

    <!-- HEADER PLACEHOLDER  -->
    <!-- <div class="__name-relative-placeholder" :class="cssNameRelativePlaceholder"></div> -->
    <div class="__header-relative-placeholder" ref="jsHeaderRelativePlaceholder"></div>

    <p class="__description-main">
      {{ descriptionMain }}
    </p>
    
    <p class="__description-sub" :class="cssDescriptionSub">
      {{ descriptionSub }}
    </p>

    <span @click="toggleDescription">
      <a class="__description-trigger" v-if="!showDescription">Show more</a>
      <a class="__description-trigger" v-if="showDescription">Hide</a>
    </span>


    <div class="__waypoint"  ref="jsWaypointBottom">
      <mlc-waypoint position="bottom" :waypoint="this.waypointHeaderBottom"></mlc-waypoint>
    </div>

  </section>
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
      showDescription: false,
      headerIsFixed: false
    }
  },
  computed: {
    cssDescriptionSub: function () {
      return {
        's-is-hidden': !this.showDescription
      }
    },
    cssHeaderMockBar: function () {
      return {
        's-is-fixed': this.headerIsFixed
      }
    },
    cssNameMockBar: function () {
      return {
        's-is-fixed': this.headerIsFixed
      }
    },
    cssNameRelativePlaceholder: function () {
      return {
        's-is-set': this.headerIsFixed
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
      return this.$refs.jsWaypointTop.getBoundingClientRect().top + window.scrollY
    },
    waypointBottom () {
      return this.$refs.jsWaypointBottom.getBoundingClientRect().top + window.scrollY
    }
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    logoSrc: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    descriptionMain: {
      type: String,
      required: true
    },
    descriptionSub: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.setHeader()
    this.$bus.$on('isResizing', () => {
      this.setHeader()
    })
  },
  methods: {
    toggleDescription () {
      if (this.showDescription === false) {
        this.showDescription = true
      } else {
        this.showDescription = false
      }
    },
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
      } else {
        this.unfixHeader()
      }
      if (this.scrollPosition >= (this.waypointBottom)) {
        this.hideHeader()
      } else {
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


/* Base component class
   ====================================================================== */
.mlc-project-group-details {
  height: 100%;
  text-align: left;
  
  @include mq($from: mobile, $until: desktop) {
    // @include inner-border(bottom, 1px, low);
  }
}

/* --
   ====================================================================== */

.__header-mock-bar {
  z-index: z("fixed", "mid");
  &.s-is-fixed {
    cursor: pointer;
    @include mq($from: desktop) {
      width: 100%;
      z-index: z("fixed", "low");
      padding-left: $unit-md;
      padding-right: $unit-md;
      position: fixed;
      top: $navbar-height;
      left: 0;
    }

    .__header {
      position: absolute;
      // @include inner-border(bottom, 1px, low);
      background: white;
      // display: inline-block;
      @include mq($from: desktop) {
        width: 33.3333%;
        padding-right: $unit-xxl;
      }
    }
  }
}

.__name-mock-bar {
  z-index: z("fixed", "low");
  &.s-is-fixed {
    @include mq($from: mobile, $until: desktop) {
      @include inner-border(bottom, 1px);
      width: 100%;
      background: $neutral-05;
      color: $neutral-100;
      z-index: z("fixed", "highest");
      padding: $unit-md;
      padding-bottom: 0;
      position: fixed;
      top: $navbar-height;
      left: 0;
      .__name {
        font-weight: 600;
        padding-bottom:  0;
      }
    }


  }
}

.__name-relative-placeholder {
  &.s-is-set {
    @include mq($from: mobile, $until: desktop) {
      height: $unit-lg;
    }
  }
}

.__header-relative-placeholder {
  @include mq($from: mobile, $until: desktop) {
    // display: none; 
  }
}

.__header {
  width: 100%;
  transition: top .2s ease;
  padding-top: $unit-md;

  @include mq($from: desktop) {
   
  }
}

.__waypoint {
  margin-top: -$navbar-height;
  margin-bottom: $navbar-height;
}


.__name {
  @include vr($font-body, $font-size-sm);
  margin-bottom: $heading-trailer;
}

.__logo-wrapper {
  position: relative;
  height: $unit-lg;
  width: 100%;
  margin-bottom: $paragraph-trailer;

  @include mq($from: desktop) {
    height: $unit-lg;
  }
}

.__logo-wrapper--portrait {
  
}

.__logo-wrapper--square {
  
}

.__logo {
  height: 100%;
  display: block;
  position: absolute;
  object-fit: inside;
  top: 0;
  left: 0;
  bottom: 0;
}


.__link-wrapper {
  @include vr($font-body, $font-size-xs);
  
  @include mq($from: desktop) {
    margin-bottom: $heading-trailer;
  }
}

.__link {
  // font-weight: 600;
  position: relative;
  color: $neutral-100;
  display: inline-block;
  text-decoration: none;
  z-index: +1;


  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    height: 1.2em;
    width: 100%;
    transition: background-color .1s ease-in-out;
    background-color: $neutral-10;
  }
  &:hover {
    &:before {
      background-color: $yellow;
    }
  }
}

.__link-icon {
  height: 1em;
}

.__divider {
  @include mq($from: desktop) {
    height: 1px;
    background-color: $neutral-10;
    width: 100%;
    margin-top: -1px;
  }
}

.__description-main {
  font-weight: 600;
  padding-top: $unit-md;
}

.__description-trigger {
  @include vr($font-body, $font-size-xs);
  cursor: pointer;
  z-index: z("clickable-content");
  display: inline-block;
  padding-bottom: 0;
  color: $blue;
  @include mq($from: desktop) {
    display: none;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    height: 1.2em;
    width: 100%;
    transition: opacity .1s ease-in-out, background-color .1s ease-in-out;
    background-color: $blue;
    opacity: .2;
  }
  &:hover {
    // color: $neutral-00;
    &:before {
      opacity: .5;
      background-color: $blue;
    }
  }
}

.__description-sub {
  @include vr($font-body, $font-size-sm);
  display: block;
  margin-bottom: $paragraph-trailer;

  @include mq($from: mobile, $until: desktop) {
    &.s-is-hidden {
      display: none;
    }
  }
}


</style>
