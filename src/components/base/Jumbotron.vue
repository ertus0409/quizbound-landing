<template>
  <v-sheet
    :dark="dark"
    :light="light"
    tile
  >
      <v-container
        class="fill-height px-4"
        style="padding: 96px 0;"
      >
        <slot />
      </v-container>
  </v-sheet>
</template>

<script>
  export default {
    name: 'BaseJumbotron',

    props: {
      dark: {
        type: Boolean,
        default: false
      },
      gradient: {
        type: String,
        default: 'to top, rgba(0,0,0,.62), rgba(0,0,0,.62)'
      },
      height: {
        type: [Number, String],
        default: '40vh'
      },
      light: {
        type: Boolean,
        default: false
      },
      src: {
        type: String,
        default: undefined,
        required: false
      }
    }
  }
</script>
