import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCard: null,
    selectedPayment: null
  },
  mutations: {
    SET_SELECTED_CARD(state, payload) {
      state.selectedCard = payload
    },
    SET_SELECTED_PAYMENT(state, payload) {
      state.selectedPayment = payload
    }
  },
  actions: {
    SET_SELECTED_CARD({ commit }, card) {
      commit('SET_SELECTED_CARD', card)
    },
    SET_SELECTED_PAYMENT({ commit }, payment) {
      commit('SET_SELECTED_PAYMENT', payment)
    }
  }
})
