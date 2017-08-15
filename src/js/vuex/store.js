/* eslint no-shadow:0 , no-plusplus:0, no-underscore-dangle:0 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultState = {
  topics: [],
  count: 0,
  currentRoute: '/',
};

const inBrowser = typeof window !== 'undefined';

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState;

const mutations = {
  TOPICS_LIST: (state, topics) => {
    state.topics = topics;
  },
  INCREMENT: (state) => {
    state.count++;
  },
  DECREMENT: (state) => {
    state.count--;
  },
};

const actions = {
  showLoading({ commit }, value) {
    commit('showLoading', value);
  },
  count({ commit }, value) {
    commit('count', value);
  },
};

const getters = {
  getTopics: state => state.topics,
  getCount: state => state.count,
};


export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
