<template>
  <v-card
    class="mx-auto py-6 mb-2"
    elevation="24"
    light
    max-width="95%"
    style="margin-top: -64px"
    v-bind="$attrs"
  >
    <v-sheet
      max-width="1000"
      class="mx-auto py-0 py-md-6"
    >
      <slot />
    </v-sheet>
  </v-card>
</template>

<script>
  export default {
    name: 'BaseCard'
  }
</script>

<style scoped>
  .v-card {
    border-radius: 6px;
  }
</style>
