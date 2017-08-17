<template>
<ul class="c__">
  <li class="c__nav-item">
    <nuxt-link class="c__nav-link" to="/projects">projects</nuxt-link>
  </li>
  <li class="c__nav-item">
    <nuxt-link class="c__nav-link" to="/profile">profile</nuxt-link>
  </li>
  <li class="c__nav-item">
    <nuxt-link class="c__nav-link" to="/recache">recache</nuxt-link>
  </li>
</ul>
</template>

<script>
  export default {
    scrolltoTop: false
  }
</script>

<style lang="scss" scoped>

@import '~assets/styles/imports/imports';

.c__ {
  background: white;
  @include inner-border(all, 1px, low);
  padding: $unit-md;
  position: fixed;
  text-align: center;
  top: auto;
  bottom: $unit-sm;
  left: $unit-sm;
  list-style: none;
  z-index: z("trump");
}

 .c__nav-item {
   display: inline-block;
   margin-right: $unit-md;

   &:last-of-type {
     margin-right: 0;
   }
 }

</style>
