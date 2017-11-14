<template>
  <transition>
    
    <ul
      v-if="list"
      class="l-grid o-list-bare"
      :class="baseClassArray">
      <slot></slot>
    </ul>

    <div
      v-else
      class="l-grid"
      :class="baseClassArray">
      <slot></slot>
    </div>

  </transition>
</template>

<script>
export default {
  props: {
    spacing: {
      type: String,
      default: 'flush'
    },
    horizontal: {
      type: String,
      required: false
    },
    vertical: {
      type: String,
      required: false
    },
    distribute: {
      type: String,
      required: false
    },
    list: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseClassArray: function () {
      var arr = []
      if (this.spacing) {
        arr.push('l-grid--' + this.spacing)
      }
      if (this.horizontal) {
        arr.push('l-grid--' + this.horizontal)
      }
      if (this.vertical) {
        arr.push('l-grid--' + this.vertical)
      }
      if (this.distribute) {
        arr.push('l-grid--' + this.distribute)
      }
      return arr
    }
  }
}
</script>


<style lang="scss">

/* Variables
======================================================================== */
$gutter-width: 0;
$spacing-sizes: (
  null: $gutter-width,
  '--xs': $unit-xs,
  '--sm': $unit-sm,
  '--md': $unit-md,
  '--lg': $unit-lg,
  '--xl': $unit-xl,
  '--flush': 0
);

/* The grid
========================================================================== */
.l-grid {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
}

/**
 * 1. Cells are full-width and stack on top of each other by default.
 */

.l-grid__cell {
  position: relative;
  flex: 0 1 auto;
  width: 100%; /* [1] */
}



/* Gutters
========================================================================== */

/**
 * 1. The variable $flexgrid-spacing-sizes contains a `null` key which
 *    will be our default gutter size.
 * 2. Add a negative margin only on one side. That way we aren't required to
 *    use a wrapper with the same amount of spacing, though it's common to do so.
 * 3. Neutralize the left margin on `l-grid`.
 */

@each $size-namespace, $size in $spacing-sizes {
  .l-grid#{$size-namespace} { /* [1] */
    margin-left: -$size; /* [2] */
    margin-top: -$size; /* [2] */
    & > .l-grid__cell {
      padding-top: $size; /* [3] */
      padding-left: $size; /* [3] */
    }
  }
}



/* Automatically size cells by distributing them equally
========================================================================== */
.l-grid--auto {
  & > .l-grid__cell {
    flex: 1 0 0;
  }
}



/* Horizontal alignment
========================================================================== */
.l-grid--center {
  justify-content: center;
}

.l-grid--right {
  justify-content: flex-end;
}

.l-grid--left {
  justify-content: flex-start;
}



/* Vertical alignment
========================================================================== */
.l-grid--middle {
  align-items: center;
}

.l-grid--bottom {
  align-items: flex-end;
}



/* Content distribution
========================================================================== */
.l-grid--around {
  justify-content: space-around;
}

.l-grid--between {
  justify-content: space-between;
}

.l-grid--reverse {
  flex-direction: row-reverse;
}


</style>
