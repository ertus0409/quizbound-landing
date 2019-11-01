<template>
  <section id="posts">
    <base-card class="px-4">
      <template v-for="(post, i) in posts">
        <v-divider
          v-if="i !== 0"
          :key="`divider-${i}`"
          class="my-12"
        />

        <h2
          :key="`title-${i}`"
          class="display-2 font-weight-light secondary--text mb-4"
          v-text="post.title"
        />

        <post
          :key="i"
          :value="post"
          dense
        />

        <div :key="`more-${i}`">
          <v-btn
            :to="`/posts/${post.slug}`"
            class="font-weight-light"
            color="accent"
          >
            Read More
          </v-btn>
        </div>
      </template>
    </base-card>
  </section>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'BlogContents',

    components: {
      Post: () => import('@/components/Post')
    },

    computed: {
      ...mapState('content', ['posts'])
    }
  }
</script>
