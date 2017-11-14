<template>
  
  <button
    v-if="submit===true"
    class="c-button"
    :class="baseClassArray"
    type="submit">
    <span class="c-button__inner" :style="innerInlineStyle">
      <c-icon
        v-if="iconName"
        class="c-button__icon"
        :class="iconClassObject"
        :style="iconInlineStyle"
        :name="iconName">
      </c-icon>
      <span
        class="c-button__text  o-text  u-vr-reset"
        :class="textClassObject">
        <slot></slot>
      </span>
    </span>
  </button>

  <c-link
    v-else
    class="c-button"
    :class="baseClassArray"
    :style="inlineStyle"
    :relativeLink="computedRelativeLink"
    :externalLink="externalLink"
    :scrollToSelector="scrollToSelector"
    @click.native="clickFunction">
    
    <span class="c-button__inner" :style="innerInlineStyle">
      <c-icon
        v-if="iconName"
        class="c-button__icon"
        :class="iconClassObject"
        :name="iconName">
      </c-icon>

      <span
        class="c-button__text  o-text  u-vr-reset"
        :class="textClassObject">
        <slot></slot>
        <!-- PREDEFINED TEXT -->
        <!-- Contact -->
        <span v-if="content==='contact'">Contact me</span>
        <!-- Profile -->
        <span v-if="content==='profile'">View my profile</span>
        <!-- Work -->
        <span v-if="content==='work'">View my work</span>
      </span>

    </span>

  </c-link>
</template>

<script>
import cIcon from '~/components/c-icon'
import detectContrast from '~/utils/detectContrast'
export default {
  components: {
    cIcon
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
    baseClassArray: function () {
      var arr = []
      if (this.type) {
        arr.push('c-button--' + this.type)
      }
      if (this.size) {
        arr.push('c-button--' + this.size)
      }
      if (this.intent) {
        arr.push('c-button--' + this.intent)
      }
      if (this.stretch === true) {
        arr.push('c-button--stretch')
      }
      return arr
    },
    textClassObject: function () {
      return {
        'o-text--sm': this.size === 'sm',
        'o-text--lg': this.size === 'lg',
        'c-button__text--dark': this.contrast === 'dark',
        'c-button__text--light': this.contrast === 'light'
      }
    },
    iconClassObject: function () {
      return {
        'c-button__icon--dark': this.contrast === 'dark',
        'c-button__icon--light': this.contrast === 'light'
      }
    },
    contrast: function () {
      if (this.highlightColor) {
        return detectContrast(this.highlightColor)
      }
    },
    innerInlineStyle: function () {
      return 'background-color: ' + this.highlightColor + ';'
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
        return '/profile/'
      } else if (this.content === 'contact') {
        return '/contact/'
      } else if (this.content === 'work') {
        return '/'
      } else if (this.relativeLink) {
        return this.relativeLink
      }
    }
  },
  props: {
    size: {
      type: String,
      default: 'md'
    },
    submit: {
      type: Boolean,
      default: false
    },
    relativeLink: {
      type: String,
      required: false
    },
    highlightColor: {
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
    },
    intent: {
      type: String,
      required: false
    }
  }
}
</script>


<style lang="scss" scoped>

/* Variables
======================================================================== */
// Layout
$icon-gutter: $unit-xs;

// Cosmetic
$font-weight: $font-weight-semi;
$default-color: $neutral-95;
$primary-color: $clr-primary;
$underline-shadow: 0 1px rgba($neutral-100, .7); 



/* Base class
======================================================================== */
.c-button {
  cursor: pointer;
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
  display: inline-block;
  margin-bottom: $unit-md;
  color: $neutral-00;
}



/* Child classes
======================================================================== */
.c-button__inner {
  padding-left: $unit-sm;
  padding-right: $unit-sm;
  pointer-events: none;
  text-align: center;
}

.c-button__icon,
.c-button__text {
  display: inline;
}

.c-button__text {
  font-weight: $font-weight;
}

.c-button__icon {
  margin-right: $icon-gutter;
  vertical-align: text-top;
}



/* Type modifiers
======================================================================== */
.c-button--solid {
  background-color: $neutral-10;
  transition: background-color .2s ease;
  box-shadow: inset 0 0 0 1px rgba($neutral-00, .1), $underline-shadow;
  color: contrasting-color($neutral-10, $lightest, $darkest);
  &:hover {
    background-color: $neutral-00;
  }
}


.c-button--ghost {
  transition: box-shadow .2s ease;
  box-shadow: inset 0 0 0 1px rgba($neutral-00, .2), $underline-shadow;

  &:hover {
    box-shadow: inset 0 0 0 1px $neutral-00, $underline-shadow;
  }
}

.c-button--ghost {
  > .c-button__inner {

    > .c-button__icon--dark,
    > .c-button__text--dark {
      color: $neutral-00;
    }

    > .c-button__icon--light,
    > .c-button__text--light {
      color: $neutral-100;
    }

  }
}



/* Size modifiers
======================================================================== */
.c-button--sm {
  padding: $unit-xs $unit-xs;
}

.c-button--md {
  padding: $unit-xs $unit-xs;
  @include mq($from: tablet) {
    padding: $unit-xs $unit-md;
  }
}

.c-button--lg {
  padding: $unit-sm $unit-md;
  @include mq($from: tablet) {
    padding: $unit-sm $unit-lg;
  }
}



/* Layout modifiers
======================================================================== */
.c-button--stretch {
  min-width: 100%;
}



/* Style modifiers
======================================================================== */
.c-button--go {
  box-shadow: inset 0 0 0 1px $clr-good, $underline-shadow;
  &.c-button--ghost {
    .c-button__icon {
    }
  }
  &.c-button--solid {
    background-color: $clr-good;
    .c-button__icon,
    .c-button__text {
      color: contrasting-color($clr-good, $lightest, $darkest);
    }
    &:hover {
      background-color: darken($clr-good, 8%);
    }
  }
}


.c-button--danger {
  box-shadow: inset 0 0 0 1px $clr-bad, $underline-shadow;
  &.c-button--solid {
    background-color: $clr-bad;
    .c-button__text,
    .c-button__icon {
      color: contrasting-color($clr-bad, $lightest, $darkest);
    }
    &:hover {
      background-color: darken($clr-bad, 8%);
    }
  }
}

.c-button--quiet {
  box-shadow: inset 0 0 0 1px $neutral-70, $underline-shadow;
  &.c-button--solid {
    background-color: $neutral-90;
    .c-button__text,
    .c-button__icon {
      color: contrasting-color($neutral-90, $lightest, $darkest);
    }
    &:hover {
      background-color: darken($neutral-90, 8%);
    }
  }
}



</style>
