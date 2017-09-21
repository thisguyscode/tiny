<template>
  <div class="o-wrapper">
      
    <h2>contact</h2>

    <div class="__filler"></div>

    <section>
      <c-cta-panel
        mainCtaHeading="Get to know me"
        mainCtaBodyText="I’ve not been in the tech industry long, but in this short time I’ve had the chance to work on some cracking projects."
        mainCtaButton="profile"
        subCtaHeading="Or see what I can do"
        subCtaButton="work">
      </c-cta-panel>
    </section>

  </div>
</template>

<script>
import cCtaPanel from '~/components/c-cta-panel'
export default {
  components: {
    cCtaPanel
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

