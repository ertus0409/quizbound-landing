1<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="color"
    :dark="!hasColor"
    :light="hasColor"
    app
    elevate-on-scroll
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-spacer class="hidden-sm-and-up" />

    <v-toolbar-title class="headline">

      <template>
          <div @click="routeHome" style="cursor: pointer;" class="d-flex">
            <v-img
              src="./../../assets/qb-logo.png"
              width="35px"
            ></v-img>
            <span class="font-weight-light">
            Quiz<strong>Bound</strong>
          </span>
          </div>
      </template>
    </v-toolbar-title>

    <v-spacer class="hidden-xs-only" />

    <v-btn
      v-for="([link, text], i) in links"
      :key="i"
      :to="link"
      class="font-weight-light hidden-sm-and-down ml-2"
      small
      text
    >
      {{ text }}
    </v-btn>
    <v-btn href="https://app.quizbound.io/login" small text class="font-weight-light hidden-sm-and-down ml-2">Login</v-btn>
    <v-btn href="https://app.quizbound.io/register" small text class="font-weight-light hidden-sm-and-down ml-2">Sign Up</v-btn>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    data: () => ({
      hasColor: false
    }),

    computed: {
      ...mapState('app', ['links']),
      color () {
        return this.hasColor ? 'white' : 'transparent'
      }
    },

    methods: {
      ...mapMutations('app', ['toggleDrawer']),
      onScroll () {
        this.hasColor = window.scrollY > 100
      },
      routeHome () {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  a{
    color:inherit;
  }
</style>
