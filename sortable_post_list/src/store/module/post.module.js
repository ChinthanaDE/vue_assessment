import axios from 'axios';

const MAX_POSTS = 5;
export default {
  namespace: true,
  state: {
    postlist: {
      loading: false,
      posts: [],
      errorMessgers: null,
    },
  },
  mutations: {
    GET_POST_REQUEST: (state) => {
      state.postlist.loading = true;
    },
    GET_POST_SUCCESS: (state, payload) => {
      state.postlist.loading = false;
      state.postlist.posts = payload.posts;
    },
    GET_POST_FAILED: (state, payload) => {
      state.postlist.loading = false;
      state.postlist.errorMessgers = payload.error;
    },
  },
  actions: {
    async fetchPost({ commit }) {
      try {
        commit('GET_POST_REQUEST');
        const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=';
        const response = await axios.get(`${BASE_URL}${MAX_POSTS}`);
        commit('GET_POST_SUCCESS', { posts: response.data });
      } catch (error) {
        commit('GET_POST_FAILED', { error });
      }
    },
  },

};
