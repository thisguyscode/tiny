<template>

  <f-link
    class="c-button"
    :class="baseClassObject"
    :style="inlineStyle"
    :relativeLink="computedRelativeLink"
    :externalLink="externalLink"
    :scrollToSelector="scrollToSelector"
    @click.native="clickFunction">

    <c-icon
      v-if="iconName"
      class="_icon"
      :style="iconInlineStyle"
      :name="iconName">
    </c-icon>

    <span class="_button_text">
      <slot></slot>
      <!-- Quick content -->
      <!-- Contact -->
      <span v-if="content==='contact'">Contact <span class="u-text--low-contrast">me</span></span>
      <!-- Profile -->
      <span v-if="content==='profile'"><span class="u-text--low-contrast">View my </span>profile</span>
      <!-- Work -->
      <span v-if="content==='work'"><span class="u-text--low-contrast">View my </span>work</span>
    </span>

  </f-link>
</template>

<script>
import cIcon from '~/components/c-icon'
import fLink from '~/components/functional/f-link'
export default {
  components: {
    cIcon,
    fLink
  },
  computed: {
    clickFunction: function () {
      if (this.onClick & this.onClickArg) {
        return this.onClick(this.onClickArg)
      } else if (this.onClick) {
        return this.onClick
      } else {
        return function () {
          null
        }
      }
    },
    baseClassObject: function () {
      return {
        'c-button--ghost': this.type === 'ghost',
        'c-button--solid': this.type === 'solid',
        'c-button--stretch': this.stretch === true
      }
    },
    iconName: function () {
      if (this.content === 'work') {
        return 'briefcase'
      } else if (this.content === 'profile') {
        return 'user'
      } else if (this.content === 'contact') {
        return 'envelope'
      } else if (this.icon) {
        return this.icon
      } else {
        return ''
      }
    },
    computedRelativeLink: function () {
      if (this.content === 'profile') {
        return '/profile'
      } else if (this.content === 'contact') {
        return '/contact'
      } else if (this.content === 'work') {
        return '/work'
      } else if (this.relativeLink) {
        return this.relativeLink
      } else return null
    }
  },
  props: {
    relativeLink: {
      type: String,
      required: false
    },
    externalLink: {
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
    },
    content: {
      type: String,
      required: false
    },
    scrollToSelector: {
      type: String,
      default: null
    },
    stretch: {
      type: Boolean,
      default: true
    },
    onClick: {
      type: Function,
      required: false
    },
    onClickArg: {
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-button {
    cursor: pointer;
    padding: $unit-xs $unit-sm;
    text-decoration: none;
    color: $neutral-00;
    white-space: nowrap;
    // min-width: 100%;
    text-align: center;
    
    @include mq($until: tablet) {
      background: $neutral-95;
    }
    @include mq($from: tablet) {
      padding: $unit-xs $unit-md;
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

  .c-button--stretch {
    min-width: 100%;
  }

  ._button_text,
  ._button_icon {
    display: inline-block;
    vertical-align: bottom;
  }
  ._button_text {
    @include vr($font-body, $font-size-md);
    @include vr-reset;
    font-weight: 600;
    color: $neutral-00;
  }
  ._icon {
    height: 1em;
    margin-right: $unit-xs;
  }

</style>
