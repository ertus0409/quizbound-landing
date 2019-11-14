<template>
  <section id="hero">
    <base-jumbotron
      style="background: linear-gradient(180deg, rgba(136,0,255,1) 0%, rgba(195,42,255,1) 100%);"
      dark
      height="400px"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col>
          <v-container>
            <div class=" text-center" :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline']">
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
