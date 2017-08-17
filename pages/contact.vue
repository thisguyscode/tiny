<template>
  <section class="page-contact">
    <div class="u-wrapper u-wrapper--small">
     <!-- <form action="https://www.enformed.io/dyuof206" method="POST" > -->
     <form method="POST" > 
      <label for="name">Name</label>
      <input id="name" class="__input" type="text" name="name">
      <label for="replyto">Email</label>
      <input id="replyto" class="__input" type="email" name="replyto">
      <label for="message">Message</label>
      <textarea id="message" rows="4" class="__input  __textarea" type="text" name="message"></textarea>
      <input class="__submit" type="submit" value="Send">
    </form>
    </div>
    <div class="__filler"></div>
  </section>
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
@import "~assets/styles/imports/imports";


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

