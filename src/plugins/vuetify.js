import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6D06CC',
        secondary: '#9B22CC',
        accent: '#4BAF51'
      }
    }
  }
})
