import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      state: {
        token: "1900101",
        name: "13661347072",
        avatar: "xiangbajiang",
        message: 2,
        roles: []
      },
      mutations: {
        SET_TOKEN: (state, token) => {
          state.token = token;
        },
        SET_NAME: (state, name) => {
          state.name = name;
        },
        SET_AVATAR: (state, avatar) =>{
          state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
          state.roles = roles;
        }
      },
      actions: {},
      getters: {
        GET_NAME: state => {
          return state.name;
        },
        GET_ROLES: state => {
          return state.roles;
        },
        GET_AVATOR: state => {
          return state.avatar;
        }
      }
    },
    system: {
      namespaced: true,
      state: {
        collapse: true
      },
      mutations: {
        SET_COLLAPSE: (state, collapse) => {
          state.collapse = collapse;
        }
      }
    }
  }
});
