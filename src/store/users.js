import firebase from 'firebase'
import * as auth from '../services/auth'

const state = {
  all: {},
  currentUser: null
}
const mutations = {
  SET_CURRENT_USER(state, user) {
    state.currentUser = user
  },

  SET_USER(state, { user }) {
    // console.log(user)
    state.all = { ...state.allUsers, [user.id]: user.data() }
  },

  REMOVE_CURRENT_USER() {
    state.currentUser = null
  }
}
const actions = {
  async setCurrentUser({ commit }) {
    const currentUser = await auth.getCurrentUser()
    commit('SET_CURRENT_USER', currentUser)
  },

  async loadCurrentUser({ commit }) {
    // commit(types.SET_PENDING_AUTH)

    try {
      const userRecord = await auth.getCurrentUser()

      if (userRecord) {
        const userData = userRecord.toJSON()
        commit('SET_CURRENT_USER', userData)
      }
    } catch (err) {
    } finally {
      // commit(types.RESET_PENDING_AUTH)
    }
  },

  // async linkProviders({ commit }) {
  //   commit('LINK_PROVIDERS')
  // },

  async logout({ commit }) {
    await firebase.auth().signOut()
    commit('REMOVE_CURRENT_USER')
  },

  seed({ rootState }) {
    const userRef = rootState.db.collection('users')
    userRef.doc('avine').set({
      firstName: 'Alexander',
      lastName: 'Viney'
    })
    userRef.doc('dylpop').set({
      firstName: 'Dylan',
      lastName: 'Viney'
    })
  },

  async getAll({ commit, rootState }) {
    const userRef = rootState.db.collection('users')
    const users = await userRef.get()
    // console.log({ users })
    users.forEach((user) => {
      // console.log({ userData: user.data() })
      commit('SET_USER', { user })
    })
  }
}

const getters = {
  currentUser() {
    return state.currentUser
  },

  allUsers() {
    return state.all
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
