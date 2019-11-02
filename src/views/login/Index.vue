<template>
  <section id="login">
    <hero />
  </section>
</template>

<style>
  #login {
    background-image: './../../assets/bg6.png';
  }
</style>
<script>
  export default {
    name: 'LoginIndex',

    metaInfo: {
      title: 'Login'
    },

    components: {
      Contents: () => import('./Contents'),
      Hero: () => import('./Hero')
    }
  }
</script>
