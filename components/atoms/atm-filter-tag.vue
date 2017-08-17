<template>
  
  <button @click="onClick" :class="classObject">
    <slot></slot>
  </button>

</template>


<script>
export default {
  computed: {
    classObject() {
      return {
        // Component
        'c-filter-tag': true,
        'c-filter-tag--loud': this.type === 'loud',
        'c-filter-tag--quiet': this.type === 'quiet',
        'c-filter-tag--go': this.type === 'go',
        // Object
        'o-btn': true,
        'o-btn--large': this.size === 'large',
        'o-btn--small': this.size === 'small',
        // State
        's-is-active': this.state.isActive,
        's-is-inactive': this.state.isInactive,
        's-is-disabled': this.state.isDisabled,
      };
    },
  },
  props: {
    onClick: {
      type: Function,
      required: false,
      default: function logNoEventAssigned() {
        // eslint-disable-next-line
        console.log('no click event assigned');
      },
    },
    state: {
      type: Object,
      default: function setDefaultState() {
        return {
          isDisabled: false,
          isActive: false,
          isInactive: false,
        };
      },
    },
    url: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
};
</script>


<style lang="scss" scoped>
  @import '../../assets/styles/components/components.filter-tag.scss';
</style>
