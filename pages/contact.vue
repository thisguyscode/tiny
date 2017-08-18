<template>
  <div class="o-wrapper">
      
    <h2>contact</h2>

    <div class="__filler"></div>

  </div>
</template>

<script>
export default {

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
.page-contact {
  text-align: left;
  padding: $unit-xxl $unit-md;
  @include mq($from: desktop) {
    padding: $unit-xxl;
  }
}

/* --
   ====================================================================== */

.__filler {
  height: 200px;
}
.__input {
  @include inner-border(all, 1px);
  &:hover,
  &:focus {
    @include inner-border(all, 1px, high)
  }
}

.__submit {
  @include inner-border(all, 1px);
  background: $neutral-100;
  color: $neutral-00;
}

.__textarea {
  height: $unit-xxl * 4; 
}
</style>

