<template>
  <div :class="'c-color-block c-color-block--' + color + ' ' + 'o-box o-box--large'">
    <p>{{ color }}</p>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/components/components.color-block';
</style>
