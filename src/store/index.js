import Vue from 'vue'
import Vuex from 'vuex'
import db from '../services/db'

import users from './users'
import conversations from './conversations'

Vue.use(Vuex)
const state = {
  db
}
export default new Vuex.Store({
  state,
  modules: {
    users,
    conversations
  }
})
