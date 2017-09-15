<template>
  <h1>data-dashboard</h1>
</template>

<script>
export default {
  methods: {
    updateCurrentProject: function () {
      // this.$store.commit('updateCurrentProject', (project.id === 'test'))
    }
  },
  mounted () {
    this.updateCurrentProject()
  }
}
</script>

