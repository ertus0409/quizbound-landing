<template>
  <v-sheet :class="classes">
    <v-container class="pa-0">
      <v-row class="mb-4">
        <v-col>
          <div class="mr-3">
            <v-icon small>
              mdi-calendar
            </v-icon>
            {{ value.date }}
          </div>
          <div class="mr-3">
            <v-icon small>
              mdi-account
            </v-icon>
            {{ value.author }}
          </div>
          <div>
            <v-icon small>
              mdi-chat
            </v-icon>
            Leave a Comment
          </div>
        </v-col>
      </v-row>

      <div
        class="subheading mb-5 post__body"
        v-html="value.body"
      />

      <v-row
        v-if="value.tags && value.tags.length > 0"
        class="mb-4"
      >
        <v-col>
          <v-icon class="mr-2">
            mdi-tag-multiple
          </v-icon>
          {{ value.tags.join(', ') }}
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
  export default {
    name: 'Post',

    props: {
      dense: {
        type: Boolean,
        default: false
      },
      value: {
        type: Object,
        default: () => ({})
      }
    },

    computed: {
      classes () {
        return {
          'post--dense': this.dense
        }
      }
    }
  }
</script>

<style>
  .post--dense .post__body > *:not(:first-child) {
    display: none;
  }
</style>
