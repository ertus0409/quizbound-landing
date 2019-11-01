import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from '@/store/modules/app'
import content from '@/store/modules/content'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    content
  }
})
