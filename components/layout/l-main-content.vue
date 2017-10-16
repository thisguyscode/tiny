<template>
  <main class="l-main-content">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>

  
  

  .l-main-content {
    padding-top: $unit-xl;
    padding-bottom: $unit-xl;

    @include mq($from: tablet) {
      padding-top: $unit-xxl;
      padding-bottom: $unit-xxl;
    }

  }

</style>
