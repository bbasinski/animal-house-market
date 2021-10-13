import Vue from 'vue'
import Vuex from 'vuex'
import animals from '@/store/modules/animals'
import categories from "@/store/modules/categories";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    animals,
    categories,
  },
  strict: debug,
})
