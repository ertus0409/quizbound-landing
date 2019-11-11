<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    metaInfo: {
      titleTemplate: 'QuizBound'
    },

    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreView: () => import('@/components/core/View')
    }
  }
</script>

<style>
  #hero h1 {
    letter-spacing: 4px !important;
  }
</style>
