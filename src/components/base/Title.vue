<template>
  <h1
    :class="[$vuetify.breakpoint.mdAndUp ? 'display-3' : 'headline']"
    class="font-weight-bold"
  >
    <slot />
  </h1>
</template>

<script>
  export default {
    name: 'BaseTitle'
  }
</script>
