<template>
  <section id="hero">
    <base-jumbotron
      :src="require('@/assets/bg6.png')"
      dark
    >
      <v-row
        align="center"
        justify="center"
      >
        <div class="display-1">
          All of our features and upgrades are free.<br>
          Our plans are based on your lead volume.<br>
          After all, your achievement is our success!
        </div>
      </v-row>
    </base-jumbotron>
  </section>
</template>

<script>
  export default {
    name: 'SampleHero'
  }
</script>
