import Vue from 'vue'
import Vuex from 'vuex'
import Stat from '@/modules/Stat'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    Stat,
  }
})
