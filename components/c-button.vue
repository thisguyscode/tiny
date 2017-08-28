<template>
  <span>

    <nuxt-link v-if="relativeLink" :to="relativeLink" class="c-button" :class="baseClassObject" :style="inlineStyle">
      <c-icon v-if="icon" class="_icon" :style="iconInlineStyle" :name="icon"></c-icon>
      <span class="_button_text">
        <slot></slot>
      </span>
    </nuxt-link>
    
    <a v-if="externalLinkTo" :href="externalLinkTo" class="c-button" :class="baseClassObject" :style="inlineStyle">
      <c-icon v-if="icon" class="_icon" :style="iconInlineStyle" :name="icon"></c-icon>
      <span class="_button_text">
        <slot></slot>
      </span>
    </a>

  </span>
</template>

<script>
import cIcon from '~/components/c-icon'
export default {
  components: {
    cIcon
  },
  computed: {
    baseClassObject: function () {
      return {
        'c-button--ghost': this.type === 'ghost',
        'c-button--solid': this.type === 'solid'
      }
    }
  },
  props: {
    relativeLink: {
      type: String,
      required: false
    },
    externalLinkTo: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    inlineStyle: {
      type: String,
      required: false
    },
    iconInlineStyle: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-button {
    padding: $unit-xs $unit-md;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $neutral-00;
    
    @include mq($until: tablet) {
      background: $neutral-95;
    }

  }

  .c-button--solid {
    background-color: $red;
  }

  .c-button--ghost {
    box-shadow: inset 0 0 0 1px $red;
    ._icon {
      color: $red;
    }
  }

  ._button_text {
    @include vr($font-body, $font-size-sm);
    @include vr-reset;
    font-weight: 600;
    color: $neutral-00;
  }
  ._icon {
    margin-right: $unit-xs;
  }

</style>
