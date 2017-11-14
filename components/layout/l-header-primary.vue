<template>
  <div class="l-header-primary">
    <div class="l-header-primary__actual">
      <slot></slot>
    </div>
    <div class="l-header-primary__placeholder"></div>
  </div>
</template>


<script>
export default {}
</script>


<style lang="scss" scoped>

/* Base Class
======================================================================== */  
.l-header-primary {
  text-align: left;
  z-index: 9000;
  position: relative;
}

/* Child Classes
======================================================================== */  
.l-header-primary__actual,
.l-header-primary__placeholder {
  height: $header-primary-height;
}

.l-header-primary__actual {
  position: fixed;
  z-index: 9000;
  top: 0;
  left: 0;
  width: 100%;
}

.l-header-primary__placeholder {
  display: block;
}

</style>
