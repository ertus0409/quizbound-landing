<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    light
    temporary
  >
    <v-list>
      <v-list-item
        v-for="([link, text], i) in links"
        :key="i"
        :to="link"
      >
        <v-list-item-title v-text="text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    computed: {
      ...mapState('app', ['links']),
      drawer: {
        get () {
          return this.$store.state.app.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },

    methods: {
      ...mapMutations('app', ['setDrawer'])
    }
  }
</script>
