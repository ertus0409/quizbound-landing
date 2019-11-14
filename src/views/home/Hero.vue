<template>
  <section id="hero">
    <base-jumbotron
      style="background: linear-gradient(120deg, rgba(136,0,255,1) 0%, rgba(195,42,255,1) 100%);"
      color="grey darken-4"
      dark
      height="100%"
      min-height="100vh"
    >
      <v-row
        align="center"
        style="width:100%"
        class="pb-12"
      >
        <v-col
          cols="12"
          md="5"
        >
          <div>
            <base-title class="mb-5" :class="[$vuetify.breakpoint.mdAndUp ? '' : 'd-flex']">
              Generate<br v-if="$vuetify.breakpoint.mdAndUp">
              Qualified Leads<br>
              with Quizzes
            </base-title>

            <v-divider class="mb-5" />

            <div class="mb-5" :class="[$vuetify.breakpoint.mdAndUp ? 'subheading' : 'headline d-flex justify-center py-5']">
              <p class="text-break">
                Turn your visitors into sales qualified leads with interactive quizzes. Increase revenue
                with better targeted data on prospects that minimizes waste.
              </p>
            </div>

            <v-btn :class="[$vuetify.breakpoint.mdAndUp ? '' : 'd-flex justify-center']"
              color="blue"
              class="ma-0"
              large
              href="https://app.quizbound.io/register"
            >
              Get Started For Free
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="7"
          :class="[$vuetify.breakpoint.mdAndUp ? '' : 'pr-10']"
        >
          <v-img
            width="100%"
            height="100%"

            src="./../../assets/customerIllustration.png"
          ></v-img>
        </v-col>
      </v-row>
    </base-jumbotron>
  </section>
</template>

<script>
  export default {
    name: 'HomeHero'
  }
</script>

<style>
  .image-responsive{

  }
</style>
