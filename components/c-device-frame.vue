<template>
  <transition>
  
    <!-- NOT COMBO -->
    <div v-if="device !== 'combo'" class="c-device-frame">
      
      <div v-if="device === 'desktop'" class="c-device-frame__desktop-frame">
        <slot></slot>
      </div>

      <div v-else-if="device === 'mobile'" class="c-device-frame__mobile-frame">
        <div class="c-device-frame__mobile-screen">
          <slot></slot>
        </div>
      </div>
    </div>

    <!-- COMBO -->
    <div v-else class="c-device-frame c-device-frame--combo">
      <div class="c-device-frame__desktop-frame">
        <slot name="desktopImg"></slot>
      </div>

      <div class="c-device-frame__mobile-frame">
        <div class="c-device-frame__mobile-screen">
          <slot name="mobileImg"></slot>
        </div>
      </div>

    </div>

  </transition>

</template>

<script>
export default {
  props: {
    device: {
      type: String,
      default: 'desktop'
    }
  },
  computed: {
    baseClassObject: function () {
      return {
        'c-device-frame--mobile': this.device === 'mobile',
        'c-device-frame--desktop': this.device === 'desktop',
        'c-device-frame--combo': this.device === 'combo'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

/* Variables
========================================================================== */
$mobile-frame-color: $neutral-15;



/* Mobile frame
========================================================================== */

.c-device-frame__mobile-frame {
  max-width: 18rem;

  @include mq($from: desktop) {
    max-width: 25rem;
  }

  min-width: 13rem;
  position: relative;
  display: inline-block;
  background: $mobile-frame-color;
  padding: 4rem .5rem 4rem;
  border-radius: 9rem/1.5rem;
  &:before {
    content: "";
    position: absolute;
    border-radius: 1rem 0 0 1rem;
    width: .5rem;
    left: -.5rem;
    height: 5rem;
    top: 10rem;
    background: $neutral-00;
  }
  &:after {
    content: "";
    position: absolute;
    border-radius: 0 1rem 1rem 0;
    width: .5rem;
    right: -.5rem;
    height: 3rem;
    top: 5rem;
    background: $neutral-00;
  }
  @include mq($from: desktop) {
    max-width: 35rem;
    padding: 7rem 1rem 7rem;
    border-radius: 18rem/3rem;
    &:before {
      width: .5rem;
      left: -.5rem;
      height: 10rem;
      top: 20rem;
    }
    &:after {
      width: .5rem;
      right: -.5rem;
      height: 6rem;
      top: 12rem;
    }
  }
}

.c-device-frame__mobile-screen {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -1.5rem;
    height: .2rem;
    width: .2rem;
    left: 50%;
    z-index: 10;
    background: $neutral-00;
    box-shadow: 0 0 0 10px $neutral-10;
    border-radius: 1rem;
  }
  @include mq($from: desktop) {
    &:before {
      top: -3rem;
      left: 50%;
      z-index: 10;
      background: $neutral-00;
    }
  }
}


/* Desktop frame
========================================================================== */
.c-device-frame__desktop-frame {
  min-width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: inline-block;
  background: $neutral-70;
  padding-top: calc(4rem + 2px);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid $neutral-70;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 12rem;
    height: 0;
    border-bottom: 1.5rem solid $neutral-90;
    border-right: .5rem solid transparent;
    border-left: .5rem solid transparent;
    box-shadow: 30rem -50rem 0 50rem $neutral-70, 30rem -48rem 0 50rem $neutral-90;
    top: $unit-xs;
    left: $unit-xs;
  }
  &:after {
    content: "";
    position: absolute;
    background: $neutral-60;
    border-radius: 50%;
    top: $unit-xs;
    right: $unit-xs;
    width: $unit-sm;
    height: $unit-sm;
    box-shadow: -1.5rem 0 $neutral-60, -3rem 0 $neutral-60;
  }
}


/* Combo
========================================================================== */
.c-device-frame--combo {
  text-align: right;
  position: relative;
  width: 100%;
  max-width: $content-max-width;
  .c-device-frame__desktop-frame {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -$page-padding-mobile*2;
    z-index: 0;
    @include mq($from: mobile) {
      left: 0;
    }
  }
  .c-device-frame__mobile-frame {
    right: -$page-padding-mobile*2;
    position: relative;
    max-width: 13rem;
    @include mq($from: mobile) {
      max-width: 18rem;
      right: 0;
    }
    @include mq($from: desktop) {
      max-width: 22rem;
    }
  }
}


/*  ==========================================================================
    # MISC
    ========================================================================== */

.c-device-frame__desktop-frame,
.c-device-frame__mobile-frame {
  box-shadow: 0 0 8rem rgba($neutral-100, .1);
  z-index: 1;
}

</style>
