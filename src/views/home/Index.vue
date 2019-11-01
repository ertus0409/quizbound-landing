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
      title: 'Landing'
    },

    components: {
      Hero: () => import('./Hero'),
      Contents: () => import('./Contents')
    }
  }
</script>
