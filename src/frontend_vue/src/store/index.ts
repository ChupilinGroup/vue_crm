import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenSidebar: true,
  },
  getters: {
    isOpenSidebarGetter(state) {
      return state.isOpenSidebar;
    },
  },
  actions: {
    isOpenSidebarAction: (context, isOpenSidebar) => {
      context.commit('isOpenSidebarMutation', !isOpenSidebar);
    },
  },
  mutations: {
    isOpenSidebarMutation: (state, isOpenSidebar) => {
      state.isOpenSidebar = isOpenSidebar;
    },
  },
});
