<template>
  <section id="talk">
    <base-card>
      <v-card-title
        :class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']"
        class="justify-center font-weight-bold grey--text text--darken-3 mb-3 text-center"
      >
        How it works?
      </v-card-title>
<!--      <v-card-text class="text-left text-md-center title font-weight-light mx-auto mb-5">-->
<!--        This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.-->
<!--      </v-card-text>-->
      <v-container>
        <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/qs67zvftze?videoFoam=true" title="QuizBound Video" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
      </v-container>

      <v-divider class="my-9 mx-3" />

      <v-card-title
        :class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']"
        class="justify-center font-weight-bold grey--text text--darken-3 mb-3 text-center"
      >
        New Qualified Leads in 4-Steps
      </v-card-title>

      <v-container class="mt-5">
        <v-row>
          <v-col
            cols="12"
            md="3"
            sm="6"
          >
            <v-card
              class="mx-auto"
              max-width="250"
            >
              <v-img
                src="./../../assets/screens/plan01.png"
                width="30px;"
                class="mb-3 white--text align-end"
              ></v-img>
              <v-card-title class="ml-2">
                1. Plan
              </v-card-title>
              <v-card-actions>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    What value can you provide to the prospects? How can you engage them? Where should you place the quiz in your website?
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="3"
            sm="6"
          >
            <v-card
              class="mx-auto"
              max-width="250"
            >
              <v-img
                src="./../../assets/screens/create01.png"
                width="30px;"
                class="mb-3"
              ></v-img>

              <v-card-title class="ml-2">
                2. Build
              </v-card-title>

              <v-card-actions>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    Build your content in minutes with our interactive builder platform. Style it to match your branding and publish with no coding.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="3"
            sm="6"
          >
            <v-card
              class="mx-auto"
              max-width="250"
            >
              <v-img
                src="./../../assets/screens/connect01.png"
                width="30px;"
                class="mb-3"
              ></v-img>

              <v-card-title class="ml-2">
                3. Connect Apps
              </v-card-title>

              <v-card-actions>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    Connect your quiz to 1000+ apps with our Zapier integration. Automate workflow to follow up with new leads.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="3"
            sm="6"
          >
            <v-card
              class="mx-auto"
              max-width="250"
            >
              <v-img
                src="./../../assets/screens/publish01.png"
                width="30px;"
                class="mb-3"
              ></v-img>

              <v-card-title class="ml-2">
                4. Embed & Publish
              </v-card-title>

              <v-card-actions>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    Embed your quiz to your website or make it a pop up. Lay back and watch the new leads dropping into your CRM.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mt-3 text-md-center">
        <v-btn
          color="blue"
          style="color: ghostwhite;"
          class="ma-0"
          large
        >
          Get Started For Free
        </v-btn>
      </v-container>

      <v-divider class="my-9 mx-3" />

      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
            sm="6"
          >
            <v-card-title
              :class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']"
              class="text-left font-weight-bold grey--text text--darken-3 mb-3"
            >
              Make your content <br> valuable to your <br> business.
            </v-card-title>

            <v-card-text class="text-left title font-weight-light mx-auto mb-5">
              Your business is the KING! Position your content to serve and nourish your business. Create interactive content like quizzes to engage visitors and guide their journey with personalized results and targeted data from quizzes. Drive profitable customer actions and increase your conversions.
            </v-card-text>
          </v-col>
          <v-col
            cols="12"
            md="6"
            sm="6"
          >
            <v-img
              src="./../../assets/illustrations/ContentCreator-Illustration.png"
              class="mb-3"
              width="600px"
            ></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
            sm="6"
          >
            <v-img
              src="./../../assets/illustrations/Business-Illustration.png"
              class="mb-3"
              width="600px"
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            md="6"
            sm="6"
          >
            <v-card-title
              :class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']"
              class="text-left font-weight-bold grey--text text--darken-3 mb-3"
            >
              Make your pipeline <br> more efficient <br> than it is.
            </v-card-title>
            <v-card-text class="text-left title font-weight-light mx-auto mb-5">
              Leverage data from interactive quizzes to qualify leads, identify their potential impact on your revenue, and focus on the highest value prospects. Just remember, it's all about asking the right questions.
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          sm="6"
        >
          <v-card-title
            :class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']"
            class="text-left font-weight-bold grey--text text--darken-3 mb-3"
          >
            Take the guesswork out of your content.
          </v-card-title>

          <v-card-text class="text-left title font-weight-light mx-auto mb-5">
            Creating consistent and quality content is already hard enough. Take the guesswork out of your content plan. Analyze the data from quizzes to better understand your target audience and their beliefs.
          </v-card-text>
        </v-col>
        <v-col
          cols="12"
          md="6"
          sm="6"
        >
          <v-img
            src="./../../assets/illustrations/Intelligence-Illustration.png"
            class="mb-3"
            width="600px"
          ></v-img>
        </v-col>
      </v-row>

<!--      <v-divider class="my-9 mx-3" />-->

<!--      <v-card-text>-->
<!--        <v-form>-->
<!--          <v-container class="px-0">-->
<!--            <v-row>-->
<!--              <v-col-->
<!--                cols="12"-->
<!--                md="6"-->
<!--              >-->
<!--                <v-text-field-->
<!--                  label="Name"-->
<!--                  outlined-->
<!--                />-->
<!--              </v-col>-->
<!--              <v-col-->
<!--                cols="12"-->
<!--                md="6"-->
<!--              >-->
<!--                <v-text-field-->
<!--                  label="Email"-->
<!--                  outlined-->
<!--                />-->
<!--              </v-col>-->
<!--              <v-col cols="12">-->
<!--                <v-textarea-->
<!--                  label="Message"-->
<!--                  outlined-->
<!--                  rows="16"-->
<!--                />-->
<!--              </v-col>-->
<!--              <v-col cols="12">-->
<!--                <v-btn-->
<!--                  :block="$vuetify.breakpoint.smAndDown"-->
<!--                  class="font-weight-light"-->
<!--                  color="primary"-->
<!--                  large-->
<!--                >-->
<!--                  Send Message-->
<!--                </v-btn>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </v-container>-->
<!--        </v-form>-->
<!--      </v-card-text>-->
    </base-card>
  </section>
</template>

<script>
  export default {
    name: 'HomeContents',

    data: () => ({
      features: [
        {
          icon: 'mdi-message-text',
          color: 'indigo',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
        {
          icon: 'mdi-shield-plus',
          color: 'green',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
        {
          icon: 'mdi-widgets',
          color: 'primary',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        }
      ],
      show: false
    })
  }
</script>
