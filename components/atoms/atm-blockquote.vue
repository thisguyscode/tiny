<template>
  <blockquote class="atm-blockquote">
    <div class="__inner">
      <slot></slot>
    </div>
  </blockquote>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>

@import "~assets/styles/imports/imports";
$quote-width: 34px;
$quote-height: 20px;

.atm-blockquote {
  @include inuit-clearfix;
  text-align: center;
  position: relative;
  display: block;
}

.__inner {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: $unit-lg $unit-xl;
  display: inline-block;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: $quote-width;
    height: $quote-height;
    background-size: $quote-width $quote-height;
  }
  
  &:before {
    background-image: url('~assets/images/quote-double-start.svg');
    top: -$quote-height;
    left: 0;
  }

  &:after {
    background-image: url('~assets/images/quote-double-end.svg');
    bottom: 0;
    right: 0;
  }
}

</style>
