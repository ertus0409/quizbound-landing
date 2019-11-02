<template>
  <v-form id="comment">
    <v-container class="px-0">
      <h4 class="subheading font-weight-bold">
        Leave a Comment
      </h4>
      <div class="caption mb-4">
        Your email address is confidential and will not be published.
      </div>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            label="Name*"
            outlined
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            label="Email*"
            outlined
            required
          />
        </v-col>

        <v-col cols="12">
          <v-text-field
            label="Website*"
            outlined
            required
          />
        </v-col>

        <v-col cols="12">
          <v-textarea
            label="Comment"
            outlined
            rows="16"
          />
        </v-col>

        <v-col>
          <v-btn
            :block="$vuetify.breakpoint.smAndDown"
            class="font-weight-light"
            color="accent"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'PostsComment'
  }
</script>
