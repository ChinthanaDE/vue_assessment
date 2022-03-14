<template>
  <div class="lg:w-1/2 px-6">
    <div class="text-3xl font-semibold text-white lg:pb-4 lg:py-0 py-4">Sortable Post List</div>
    <transition name="fade-slide-in" mode="out-in" key="1">
      <transition-group name="posts-list-transition" tag="div" v-if="postState.posts.length">
        <PostAccordianItem
          v-for="(post, index) in postState.posts"
          :key="post.id"
          :title="post.title"
          :arrows="changeArrow(index)"
        />
      </transition-group>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

import PostAccordianItem from './PostAccordianItem.vue';

export default {
  name: 'PostList',
  components: {
    PostAccordianItem,
  },
  created() {
    this.$store.dispatch('fetchPost', null, { root: true });
  },
  computed: mapGetters({
    postState: 'getPostsState',
  }),
  methods: {
    changeArrow(index) {
      console.log(index);
      if (index === 0) return 'down';
      if (index === this.postState.posts.length - 1) return 'up';
      return 'both';
    },
  },
};
</script>
