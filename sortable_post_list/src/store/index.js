import { createStore } from 'vuex';
import postModules from './module/post.module';

export default createStore({
  state: {
    postState: postModules.state,
  },
  getters: {
    getPostsState: (state) => state.postState.postlist,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    postModules,
  },
});
