<template>
  
  <button
    v-if="submit===true"
    class="c-button"
    :class="baseClassObject"
    type="submit"
    >
    <span class="c-button__inner">
      <c-icon
        v-if="iconName"
        class="c-button__icon"
        :style="iconInlineStyle"
        :name="iconName">
      </c-icon>
      <span class="c-button__text  o-text  u-vr-reset">
        <slot></slot>
      </span>
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
    
    <span class="c-button__inner">
      <c-icon
        v-if="iconName"
        class="c-button__icon"
        :style="iconInlineStyle"
        :name="iconName">
      </c-icon>

      <span
        class="c-button__text  o-text  u-vr-reset"
        :class="textClassObject">
        <slot></slot>
        <!-- Quick content -->
        <!-- Contact -->
        <span v-if="content==='contact'">Contact me</span>
        <!-- Profile -->
        <span v-if="content==='profile'">View my profile</span>
        <!-- Work -->
        <span v-if="content==='work'">View my work</span>
      </span>

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
        'c-button--stretch': this.stretch === true,
        'c-button--sm': this.size === 'sm',
        'c-button--md': this.size === 'md',
        'c-button--lg': this.size === 'lg',
        'c-button--go': this.intent === 'go',
        'c-button--danger': this.intent === 'danger',
        'c-button--quiet': this.intent === 'quiet'
      }
    },
    textClassObject: function () {
      return {
        'o-text--sm': this.size === 'sm',
        'o-text--lg': this.size === 'lg'
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
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Variables
======================================================================== */
// Layout
$icon-gutter: $unit-xs;

// Cosmetic
$font-weight: $font-weight-semi;
$default-color: $neutral-95;
$primary-color: $clr-primary;

$underline-shadow: 0 1px $neutral-100; 



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
}



/* Child classes
======================================================================== */
.c-button__inner {
  pointer-events: none;
  text-align: center;
}

.c-button__text {
  display: inline-block;
  font-weight: $font-weight;
  color: $neutral-00;
}
.c-button__icon {
  height: 1.1em;
  display: inline-block;
  margin-right: $icon-gutter;
  vertical-align: text-top;
}



/* Type modifiers
======================================================================== */
.c-button--solid {
  background-color: $primary-color;
  transition: background-color .2s ease;
  box-shadow: inset 0 0 0 1px $primary-color, $underline-shadow;
  .c-button__text,
  .c-button__icon {
      color: contrasting-color($primary-color, $lightest, $darkest);
    }
  &:hover {
    background-color: darken($primary-color, 8%);
  }
}


.c-button--ghost {
  // background-color: rgba($neutral-100, .5);
  box-shadow: inset 0 0 0 1px $primary-color, $underline-shadow;
  transition: background-color .2s ease;
  .c-button__icon {
    color: $primary-color;
  }
}


/* Style modifiers
======================================================================== */
.c-button--go {
  box-shadow: inset 0 0 0 1px $clr-good, $underline-shadow;
  &.c-button--ghost {
    .c-button__icon {
      color: $clr-good;
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
  &.c-button--ghost {
    .c-button__icon {
      color: $clr-bad;
    }
  }
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
  &.c-button--ghost {
    .c-button__icon {
      color: $neutral-30;
    }
  }
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

</style>
