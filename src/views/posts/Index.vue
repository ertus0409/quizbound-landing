<template>
  <section id="posts">
    <hero />

    <contents />
  </section>
</template>

<script>
  export default {
    name: 'PostsIndex',

    metaInfo: {
      title: 'Posts'
    },

    components: {
      Contents: () => import('./Contents'),
      Hero: () => import('./Hero')
    }
  }
</script>
