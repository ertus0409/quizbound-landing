<template>
  <section id="sample">
    <hero />

    <contents />
  </section>
</template>

<script>
  export default {
    name: 'SampleIndex',

    metaInfo: {
      title: 'Sample'
    },

    components: {
      Hero: () => import('./Hero'),
      Contents: () => import('./Contents')
    }
  }
</script>
