import { createStore } from "vuex";
import Axios from "axios";

export default createStore({
  state: {
    questions: [],
  },
  getters: {
    questions: function (state) {
      return state.questions;
    },
  },
  mutations: {
    setQuestions(state, payload) {
      state.questions = payload;
    },
  },
  actions: {
    async loadQuestions({ commit }) {
      const response = await Axios.get("https://opentdb.com/api.php?amount=10");
      commit("setQuestions", response.data.results);
    },
  },
});
