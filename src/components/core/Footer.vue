<template>
  <v-footer
    absolute
    class="my-3 mx-auto"
    color="transparent"
    height="auto"
    max-width="95%"
  >
    <v-row justify="center">
      <v-btn
        v-for="([link, text], i) in links"
        :key="`link-${i}`"
        :to="link"
        class="mx-auto hidden-sm-and-down"
        small
        text
      >
        {{ text }}
      </v-btn>

      <v-spacer />

      <v-col
        class="hidden-md-and-up"
        cols="12"
      />

      <v-btn
        v-for="([href, text], i) in socials"
        :key="`social-${i}`"
        :href="href"
        class="px-0 mx-2"
        color="grey darken-1"
        dark
        min-width="48"
        rel="noopener"
        target="_blank"
      >
        <v-icon
          size="18"
          v-text="text"
        />
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'CoreFooter',

    data: () => ({
      socials: [
        ['https://facebook.com', 'mdi-facebook'],
        ['https://twitter.com', 'mdi-twitter']
      ]
    }),

    computed: {
      ...mapState('app', ['links']),
      categories () {
        return []
      }
    }
  }
</script>
