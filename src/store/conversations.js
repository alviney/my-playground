import Vue from 'vue'
import uuidv4 from 'uuid/v4'

const state = {
  all: {},
  allIds: [],
  allMsgIds: []
}

const mutations = {
  SET_CONVERSATION(state, { conversation }) {
    const data = conversation.data()
    state.all = {
      ...state.all,
      [conversation.id]: { users: data.users, created: data.created, messages: [] }
    }
    // Vue.set(state.all, conversation.id, data)
    // Vue.set(state.all, data)
    state.allIds.push(conversation.id)
  },
  ADD_MESSAGE(state, { conversationId, message }) {
    if (!state.allMsgIds.includes(message.id)) {
      state.all[conversationId].messages.push(message)
      state.allMsgIds.push(message.id)
    }
  }
}

const actions = {
  seed({ rootState }) {
    const convoRef = rootState.db.collection('conversations')
    convoRef.add({
      created: Date.now(),
      users: ['mr_a', 'mr_b'],
      messages: [{ id: uuidv4(), text: 'Hi there', sender: 'mr_a' }]
    })
  },
  async get({ commit, rootState }) {
    const convoRef = rootState.db.collection('conversations')
    // try catch
    const convos = await convoRef.get()
    convos.forEach((conversation) => {
      commit('SET_CONVERSATION', { conversation })
    })
  },
  sendMessage({ rootState }, { text, sender, conversationId }) {
    const convoRef = rootState.db.collection('conversations').doc(conversationId)
    const created = Date.now()
    convoRef
      .update({
        messages: [...state.all[conversationId].messages, { id: uuidv4(), created, sender, text }]
      })
      .then(() => console.log('Message sent.'))
      .catch((err) => console.log('Error', err))
  }
}

export default { namespaced: true, state, mutations, actions }
