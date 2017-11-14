<template>
  <div class="c-loading-indef">
    <div class="c-loading-indef__item"></div>
    <div class="c-loading-indef__item"></div>
    <div class="c-loading-indef__item"></div>
  </div>
</template>


<script>
export default {}
</script>


<style lang="scss" scoped>

/* Base Class
======================================================================== */  
.c-loading-indef {
  text-align: center;
}



/* Child Classes
======================================================================== */
.c-loading-indef__item  {
  width: 18px;
  height: 18px;
  margin-right: 12px;
  background-color: $neutral-00;
  box-shadow: 0 0 16px rgba($neutral-100, .3);

  border-radius: 100%;
  display: inline-block;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  
  &:nth-of-type(1) {
    animation-delay: -0.32s;
  }
  &:nth-of-type(2) {
    animation-delay: -0.16s;
  }
  &:nth-of-type(3) {
    margin-right: 0;
  }  
}


/* Animation keyframes
======================================================================== */
@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
}

</style>
