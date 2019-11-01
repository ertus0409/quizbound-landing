import { set, toggle } from '@/utils/vuex'

export default {
  namespaced: true,

  state: {
    links: [
      ['/', 'Home'],
      ['/pricing', 'Pricing'],
      ['/login', 'Login'],
      ['/signup', 'Sign Up']
    ],
    drawer: null
  },

  mutations: {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer')
  }
}
