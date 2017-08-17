<template>
  <atm-no-ssr>
    <v-waypoint :id="id" :position="position" @waypoint="waypoint"></v-waypoint>
  </atm-no-ssr>
</template>

<script>
import atmNoSsr from '~components/atoms/atm-no-ssr'
export default {
  components: {
    atmNoSsr
  },
  props: {
    waypoint: {
      type: Function,
      required: false
    },
    position: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
