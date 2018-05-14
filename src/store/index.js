import Vue from 'vue'
import Vuex from 'vuex'
import db from '../services/db'

Vue.use(Vuex)
const state = {
  db
}
export default new Vuex.Store({
  state,
  modules: {}
})
