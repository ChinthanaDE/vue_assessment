<template>
  <div class="lg:w-1/2 px-6">
    <div class="text-3xl font-semibold text-white lg:pb-4 lg:py-0 py-4">Sortable Post List</div>
    <transition name="fade-slide-in" mode="out-in" key="1">
      <transition-group name="posts-list-transition" tag="div">
      <div v-for="(post,index) in posts" :key="post.id">
        <PostAccordianItem :key="post.id"
          :title="post.title"
          :arrows="changeArrow(index)"
          />
        </div>
      </transition-group>
    </transition>
  </div>
</template>

<script>

import PostAccordianItem from './PostAccordianItem.vue';

export default {
  name: 'PostList',
  components: {
    PostAccordianItem,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'post 1' },
        { id: 2, title: 'post 2' },
        { id: 3, title: 'post 3' },
        { id: 4, title: 'post 4' },
        { id: 5, title: 'post 5' },
      ],
    };
  },
  methods: {
    changeArrow(index) {
      if (index === 0) return 'down';
      if (index === this.posts.length - 1) return 'up';
      return 'both';
    },
  },
};
</script>
