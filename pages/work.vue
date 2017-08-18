<template>
  <section>
    
    <div class="o-wrapper">
      
      <h2>work</h2>

      <div class="__filler"></div>

    </div>

  </section>
</template>

<script>
export default {
  scrollToTop: false,
  layout: 'default',
  data: () => {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

/* NOTES
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports";


/* Local variables
   ====================================================================== */


/* Base component class
   ====================================================================== */
.page-projects {
}

/* --
   ====================================================================== */

.__quote {
  @include inner-border(bottom, 1px, low);
  background-color: $neutral-90;
  background-image: url('~assets/images/topography.svg');
  background-size: 100%;
  color: $neutral-00
}
</style>
