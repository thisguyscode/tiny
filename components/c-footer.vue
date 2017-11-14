<template>
  <footer class="c-footer" :style="'background-color:' + this.$store.state.currentColor">
    <small class="c-footer__text o-text o-text--xs" :class="textClass">
      <span class="">Made by </span>
      <span class="c-footer__name">Jamie Mitchell</span>
    </small>
  </footer>
</template>

<script>
import detectContrast from '~/utils/detectContrast'
export default {
  computed: {
    textClass: function () {
      if (this.$store.state.currentColor) {
        return 'c-footer__text--' + detectContrast(this.$store.state.currentColor)
      }
    }
  }
}
</script>


<style lang="scss" scoped>

/* Base Class
========================================================================== */
.c-footer {
  background-color: $clr-primary;
  color: contrasting-color($clr-primary, $lightest, $darkest);
  padding-top: $unit-md;
  padding-bottom: $unit-md;
}


/* Child Classes
========================================================================== */
.c-footer__name {
  font-weight: $font-weight-semi;
}

.c-footer__text {
  opacity: .7;
}

.c-footer__text--light {
  color: $lightest;
}

.c-footer__text--dark {
  color: $darkest;
}

</style>
