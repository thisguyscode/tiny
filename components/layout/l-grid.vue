<template>
  <section class="l-grid" :class="baseClassObject">
    <slot></slot>
  </section>  
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
      }
    },
    computed: {
      baseClassObject: function () {
        return {
          // Spacing
          'l-grid--xs': this.spacing === 'xs',
          'l-grid--sm': this.spacing === 'sm',
          'l-grid--md': this.spacing === 'md',
          'l-grid--lg': this.spacing === 'lg',
          'l-grid--xl': this.spacing === 'xl',
          'l-grid--flush': this.spacing === 'flush',
          // Horizontal Alignment
          'l-grid--center': this.horizontal === 'center',
          'l-grid--left': this.horizontal === 'left',
          'l-grid--right': this.horizontal === 'right',
          // Vertical Alignment
          'l-grid--middle': this.vertical === 'middle',
          'l-grid--bottom': this.vertical === 'bottom',
          // Content Distribution
          'l-grid--around': this.distribute === 'around',
          'l-grid--between': this.distribute === 'between'
        }
      }
    }
  }

</script>

<style lang="scss" scoped>

  // Import variables and global settings
  @import "~assets/styles/imports";

  // This variable is deprecated. Use $flexgrid-spacing-sizes instead.
  $gutter-width: 0 !default;

  // Specify a map of possible gutter widths. By default we use the global
  // spacing units
  $spacing-sizes: (
      null: $gutter-width,
      '--xs': $unit-xs,
      '--sm': $unit-sm,
      '--md': $unit-md,
      '--lg': $unit-lg,
      '--xl': $unit-xl,
      '--flush': 0
  ) !default;


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

  ._cell {
      flex: 0 1 auto;
      width: 100%; /* [1] */
  }


  /* Gutters
    ========================================================================== */

  /**
  * 1. The variable $spacing-sizes contains a `null` key which
  *    will be our default gutter size.
  * 2. Add a negative margin only on one side. That way we aren't required to
  *    use a wrapper with the same amount of spacing, though it's common to do so.
  * 3. Neutralize the left margin on `l-grid`.
  */

  @each $size-namespace, $size in $spacing-sizes {
      .l-grid#{$size-namespace} { /* [1] */
          margin-left: -$size; /* [2] */
          & > ._cell {
              padding-left: $size; /* [3] */
          }
      }
  }


  /* Automatically size cells by distributing them equally
    ========================================================================== */

  .l-grid--auto {
      & > ._cell {
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

  // .l-grid--around {
  //     justify-content: space-around;
  // }

  .l-grid--between {
      justify-content: space-between;
  }

  .l-grid--reverse {
      flex-direction: row-reverse;
  }

</style>
