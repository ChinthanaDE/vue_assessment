import { createStore } from 'vuex';
// eslint-disable-next-line import/no-named-as-default
import postModules from './module/post.module';

export default createStore({
  state: {
    postState: postModules.state,
  },
  getters: {
    getPostsState: (state) => state.postState.postlist,
    getHistoryState: (state) => state.postState.historylist,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    postModules,
  },
});
