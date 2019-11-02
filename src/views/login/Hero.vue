<template>
  <section id="hero">
    <base-jumbotron
      :src="require('@/assets/bg6.png')"
      dark
      height="100vh"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-title>
            Hello World
          </v-card-title>

          <v-card-text>
            Etner password
          </v-card-text>
        </v-card>
      </v-row>
    </base-jumbotron>
  </section>
</template>

<script>
  export default {
    name: 'LoginHero'
  }
</script>
