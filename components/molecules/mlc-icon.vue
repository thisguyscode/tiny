<template>
  <atm-no-ssr>
    <icon :name="name" :class="classObject"></icon>
  </atm-no-ssr>  
</template>

<script>
import atmNoSsr from '~components/atoms/atm-no-ssr'
export default {
  components: {
    atmNoSsr
  },
  props: {
    name: {
      type: String,
      required: true
    },
    classObject: {
      type: Object,
      required: false
    }
  }
}
</script>

<style>
  
</style>
