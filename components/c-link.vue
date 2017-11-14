<template>

  <!-- Links to another page -->
  <nuxt-link
    v-if="relativeLink" 
    class="c-link"
    :class="baseClassObject"
    :to="relativeLink">
    <slot></slot>
  </nuxt-link>
  

  <!-- Links to another website -->
  <a
    v-else-if="externalLink" 
    class="c-link"
    :class="baseClassObject"
    :href="externalLink"
    target="_blank"
    rel="noopener">
    <slot></slot>
  </a>


  <!-- Links to an element on same page -->
  <span
    v-else-if="scrollToSelector">
    <f-no-ssr>
      <a class="c-link" :class="baseClassObject" v-scroll-to="{ el: scrollToSelector, offset: -176 }">
        <span class="o-link-bloater"></span>
        <span class="u-hidden-visually">
          <slot name="linkText"></slot>
        </span>
      </a>
    </f-no-ssr>
    <slot></slot>
  </span>


  <!-- ANY OTHER link -->
  <a v-else>
    <slot></slot>
  </a>

</template>


<script>
export default {
  props: {
    relativeLink: {
      type: String,
      required: false
    },
    externalLink: {
      type: String,
      required: false
    },
    scrollToSelector: {
      type: String,
      required: false
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseClassObject: function () {
      return {
        'c-link--inline': this.inline === true
      }
    }
  }
}
</script>


<style lang="scss" scoped>

/* Variables
======================================================================== */
$inline-background: $blue;



/* Base Class
======================================================================== */
.c-link {
  cursor: pointer;
  position: static;
  text-decoration: none;
}



/* Modifiers
======================================================================== */
.c-link--inline {
  transition: background-color .1s ease, color .1s ease;
  display: inline;
  background-color: rgba($inline-background, .2);
  box-shadow: 0 1px $inline-background;
  &:hover {
    color: contrasting-color($inline-background, $lightest, $darkest);
    background-color: rgba($inline-background, .8);
  }
}
</style>
