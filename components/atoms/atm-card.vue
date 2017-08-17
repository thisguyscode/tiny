<template>

  <div :class="classObject">
    <slot></slot>
  </div>

</template>

<script>

export default {
  computed: {
    classObject() {
      return {
        // Component
        'c-card': true,
        // Object
        'o-box': true,
        'o-box--large': this.size === 'large',
        'o-box--small': this.size === 'small',
      };
    },
  },
  props: {
    size: {
      type: String,
      required: false,
      default: null,
    },
  },
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/components/components.card';
</style>
