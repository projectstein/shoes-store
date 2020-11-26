import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCard: null
  },
  mutations: {
    SET_SELECTED_CARD(state, payload) {
      state.selectedCard = payload
    }
  },
  actions: {
    SET_SELECTED_CARD({ commit }, card) {
      commit('SET_SELECTED_CARD', card)
    }
  }
})
