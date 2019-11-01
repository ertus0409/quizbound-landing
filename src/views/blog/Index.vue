<template>
  <section id="blog">
    <hero />

    <contents />
  </section>
</template>

<script>
  export default {
    name: 'BlogIndex',

    metaInfo: {
      title: 'Blog'
    },

    components: {
      Hero: () => import('./Hero'),
      Contents: () => import('./Contents')
    }
  }
</script>
