import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import moveArrayItem from '../../util/moveArrayItem';

const MAX_POSTS = 5;
export default {
  namespace: true,
  state: {
    postlist: {
      posts: [],
    },
    historylist: {
      history: [],
    },
  },
  mutations: {
    SET_POST: (state, payload) => {
      state.postlist.posts = payload.posts;
    },
    ADD_HISTORY: (state, payload) => {
      state.historylist.history.push({ ...payload, id: uuidv4() });
    },
  },
  actions: {
    fetchPost: async ({ commit }) => {
      const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=';
      try {
        const response = await axios.get(`${BASE_URL}${MAX_POSTS}`);
        commit('SET_POST', { posts: response.data });
      } catch (error) {
        console.error(error);
      }
    },
    movePost: ({ commit, state }, payload) => {
      const sortedPosts = moveArrayItem(state.postlist.posts, payload.from, payload.to);
      commit('SET_POST', { posts: sortedPosts });
      commit('ADD_HISTORY', {
        postId: payload.from,
        from: payload.from,
        to: payload.to,
        posts: sortedPosts,
      });
    },
    timeTravel: ({ commit, state }, historyIndex) => {
      const posts = state.historylist.history[historyIndex];
      commit('SET_POST', { ...posts });
    },
  },
};
