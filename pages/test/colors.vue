<template>
  <section class="p-colors">
    <div class="block js" :style="'background-color: ' + color + '; ' + 'color: ' + text">
      <h2 class="o-heading o-heading--alpha">JS</h2>
    </div>
    <div class="block css">
      <h2 class="o-heading o-heading--alpha">CSS</h2>
    </div>
  </section>
</template>

<script>
import detectContrast from '~/utils/detectContrast.js'
export default {
  computed: {
    color: function () {
      return '#009833'
    },
    text: function () {
      if (detectContrast(this.color) === 'light') {
        return 'white'
      } else {
        return 'black'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

$color: #009833;

.p-colors {
  padding: $unit-lg;
  padding-top: 300px;
  padding-bottom: 300px;
}
.block {
  display: block;
  height: $unit-lg;
  margin-bottom: $unit-md;
  
  &.css {
    background-color: $color;
    color: contrasting-color($color, $lightest, $darkest);
  }
}
</style>
