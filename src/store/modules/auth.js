import { login } from '../../api/imgur';

const state = () => ({
  token: null
});

const getters = {
  isLoggedIn: (state) =>  !!(state.token)
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {
  login: () => {
    login()
  },

  finalizeLogin: () => {},
  
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}