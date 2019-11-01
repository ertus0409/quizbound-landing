<template>
  <section id="hero">
    <base-jumbotron
      :src="require('@/assets/post-bg.jpg')"
      dark
    >
      <v-row
        align="center"
        justify="center"
      >
        <base-title>
          Demo Post
        </base-title>
      </v-row>
    </base-jumbotron>
  </section>
</template>

<script>
  export default {
    name: 'PostsHero'
  }
</script>
