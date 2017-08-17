<template>
  
  <!--IF it's a link-->
  <a v-if="url" :href="url" :class="classObject">
    <icon v-if="icon" :name="icon" class="o-btn__icon"></icon>
    <slot></slot>
  </a>

  <!--ELSE it's another interaction -->
  <button v-else @click="onClick" :class="classObject">
    <icon v-if="icon" :name="icon" class="o-btn__icon"></icon>
    <slot></slot>
  </button>

</template>


<script>
export default {
  computed: {
    classObject () {
      return {
        // Component
        'c-btn': true,
        'c-btn--loud': this.type === 'loud',
        'c-btn--quiet': this.type === 'quiet',
        'c-btn--go': this.type === 'go',
        'c-btn--danger': this.type === 'danger',
        // Object
        'o-btn': true,
        'o-btn--large': this.size === 'large',
        'o-btn--small': this.size === 'small',
        // State
        's-is-disabled': this.state.isDisabled,
        's-is-busy': this.state.isBusy,
        's-has-error': this.state.hasError,
        's-has-success': this.state.hasSuccess
      }
    }
  },
  props: {
    onClick: {
      type: Function,
      required: false,
      default: function logNoEventAssigned () {
        // eslint-disable-next-line
        console.log('no click event assigned')
      }
    },
    state: {
      type: Object,
      default: function setDefaultState () {
        return {
          isDisabled: false,
          isBusy: false,
          hasError: false,
          hasSuccess: false
        }
      }
    },
    url: {
      type: String,
      required: false
    },
    size: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '~assets/styles/components/components.atm-button';
</style>
