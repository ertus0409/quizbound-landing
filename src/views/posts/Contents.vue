<template>
  <section id="content">
    <base-card>
      <v-container class="py-0">
        <post :value="post" />

        <comment />
      </v-container>
    </base-card>
  </section>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'PostContents',

    components: {
      Comment: () => import('./Comment'),
      Post: () => import('@/components/Post')
    },

    computed: {
      ...mapState('content', ['posts']),
      post () {
        return this.posts.find(p => p.slug === this.$route.params.slug)
      }
    }
  }
</script>
