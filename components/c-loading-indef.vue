<template>
  <div class="c-loading-indef">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  
  

  .c-loading-indef {
    text-align: center;
  }

  .c-loading-indef > div {
    width: 18px;
    height: 18px;
    margin-right: 12px;
    background-color: $neutral-00;
    box-shadow: 0 0 16px rgba($neutral-100, .3);

    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    &:last-of-type {
      margin-right: 0;
    }
  }

  .c-loading-indef .bounce1 {
    animation-delay: -0.32s;
  }

  .c-loading-indef .bounce2 {
    animation-delay: -0.16s;
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% { 
      transform: scale(0);
    } 40% { 
      transform: scale(1.0);
    }
  }

</style>
