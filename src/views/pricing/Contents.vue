<template>
  <section id="content">
    <base-card>
      <v-row class="mt-5">
        <v-col
          cols="12"
          md="4"
          sm="4"
        >
          <div class="text-md-center pt-2">
            <v-img
              src="./../../assets/pricing/tier0.png"
              width="60%"
              class="mb-3"
              style="margin: auto;"
            ></v-img>
            <p class="title mt-12">
              FREE
            </p>
            <v-divider class="my-6 mx-3" />
            <p class="subtitle-1">
              unlimited quizzes <br> 0-100 leads
            </p>
            <p class="subtitle-2">
              $0 /mo
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="4"
        >
          <div class="text-md-center">
            <v-img
              src="./../../assets/pricing/tier1.png"
              width="60%"
              class="mb-3"
              style="margin: auto;"
            ></v-img>
            <p class="title mt-10">
              STARTUP
            </p>
            <v-divider class="my-6 mx-3" />
            <p class="subtitle-1">
              unlimited quizzes <br> 100-2000 leads
            </p>
            <p class="subtitle-2">
              $29 /mo
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="4"
        >
          <div class="text-md-center pt-8">
            <v-img
              src="./../../assets/pricing/tier2.png"
              width="75%"
              class="mb-3"
              style="margin: auto;"
            ></v-img>
            <p class="title mt-12">
              ENTERPRISE
            </p>
            <v-divider class="my-6 mx-3" />
            <p class="subtitle-1">
              unlimited quizzes <br> 2000+ leads
            </p>
<!--            <p class="subtitle-2">-->
<!--              contact us-->
<!--            </p>-->
            <v-btn
              color="green"
              style="color: white;"
              class="ma-0"
              small
            >cotnact us</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center mt-5">
        <v-btn
          color="blue"
          style="color: white;"
          class="ma-0"
          large
        >
          Sign Up For Free
        </v-btn>
      </v-row>
    </base-card>
  </section>
</template>

<script>
  export default {
    name: 'SampleContents'
  }
</script>
