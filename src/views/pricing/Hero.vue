<template>
  <section id="hero">
    <base-jumbotron
      :src="require('@/assets/bg6.png')"
      dark
      height="400px"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col>
          <v-container>
            <div class="display-1 text-md-center">
              Our plans are based only on your lead volume.<br>
              After all, your achievement is our success!
            </div>
          </v-container>
        </v-col>
      </v-row>
    </base-jumbotron>
  </section>
</template>

<script>
  export default {
    name: 'SampleHero'
  }
</script>
