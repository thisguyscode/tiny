<template>
  <button
    v-if="submit===true"
    class="c-button"
    :class="baseClassObject"
    type="submit"
    >
    <c-icon
      v-if="iconName"
      class="c-button__icon"
      :style="iconInlineStyle"
      :name="iconName">
    </c-icon>
    <span class="c-button__text  o-text  u-vr-reset">
      <slot></slot>
    </span>
  </button>

  <f-link
    v-else
    class="c-button"
    :class="baseClassObject"
    :style="inlineStyle"
    :relativeLink="computedRelativeLink"
    :externalLink="externalLink"
    :scrollToSelector="scrollToSelector"
    @click.native="clickFunction">

    <c-icon
      v-if="iconName"
      class="c-button__icon"
      :style="iconInlineStyle"
      :name="iconName">
    </c-icon>

    <span class="c-button__text  o-text  u-vr-reset">
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
      }
    }
  },
  props: {
    submit: {
      type: Boolean,
      default: false
    },
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
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Variables (redefine global variable dependencies)
======================================================================== */
// Layout
$padding-y-mobile: $unit-xs;
$padding-x-mobile: $unit-sm;
$padding-y-tablet: $unit-xs;
$padding-x-tablet: $unit-md;

$icon-gutter: $unit-xs;

// Cosmetic
$font-weight: $font-weight-semi;
$default-color: $neutral-95;
$primary-color: $clr-primary;





/* Base class
======================================================================== */
.c-button {
  cursor: pointer;
  padding: $padding-y-mobile $padding-x-mobile;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
  display: inline-block;
  // color: $neutral-00;
  // min-width: 100%;
  @include mq($until: tablet) {
    background: $default-color;
  }
  @include mq($from: tablet) {
    padding: $padding-y-tablet $padding-x-tablet;
  }
}



/* Child classes
======================================================================== */
.c-button__text {
  font-weight: $font-weight;
  // color: $neutral-00;
}
.c-button__icon {
  height: 1em;
  margin-right: $icon-gutter;
}
.c-button__text,
.c-button__icon {
  display: inline-block;
  vertical-align: middle;
}



/* Style modifiers
======================================================================== */
.c-button--solid {
  background-color: $primary-color;
  transition: background-color .2s ease;
  &:hover {
    background-color: darken($primary-color, 5%);
  }
}


.c-button--ghost {
  box-shadow: inset 0 0 0 1px $primary-color;
  transition: background-color .2s ease;

  .c-button__icon {
    color: $primary-color;
  }

  &:hover {
    background-color: rgba($primary-color, .9);
  }
}



/* Layout modifiers
======================================================================== */
.c-button--stretch {
  min-width: 100%;
}

</style>
