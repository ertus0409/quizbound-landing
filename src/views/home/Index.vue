<template>
  <section id="home">
    <hero />

    <contents />
  </section>
</template>

<script>
  export default {
    name: 'HomeIndex',

    metaInfo: {
      title: 'Home'
    },

    components: {
      Hero: () => import('./Hero'),
      Contents: () => import('./Contents')
    }
  }
</script>
