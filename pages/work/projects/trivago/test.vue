<template>
  <h1>test</h1>
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

