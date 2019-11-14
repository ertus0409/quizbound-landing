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
        class="pb-12"
      >
        <v-col
          cols="12"
          md="5"
        >
          <div>
            <base-title class="mb-5">
              Generate<br>
              Qualified Leads<br>
              with Quizzes
            </base-title>

            <v-divider class="mb-5" />

            <div class="subheading mb-5">
              <p>
                Turn your visitors into sales qualified leads with interactive quizzes. Increase revenue
                with better targeted data on prospects that minimizes waste.
              </p>
            </div>

            <v-btn
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
        >
          <v-img
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
