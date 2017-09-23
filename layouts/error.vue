<template>
  <div class="u-box u-box--xxl">
    <h1 class="error-code">{{ error.statusCode }}</h1>
      <div class="error-wrapper-message">
        <h2 class="error-message">{{ error.message }}</h2>
      </div>
      <p v-if="error.statusCode === 404"><nuxt-link class="error-link" to="/">Back to the home page</nuxt-link></p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>

