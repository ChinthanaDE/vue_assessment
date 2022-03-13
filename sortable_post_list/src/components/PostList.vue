<template>
  <div class="lg:w-1/2 px-6">
    <div class="text-3xl font-semibold text-white lg:pb-4 lg:py-0 py-4">Sortable Post List</div>
    <transition name="fade-slide-in" mode="out-in" key="1">
      <transition-group name="posts-list-transition" tag="div">
        <PostAccordianItem
          v-for="(post) in posts"
          :key="post.id"
          :title="post.postTitle"
        />
      </transition-group>
    </transition>
  </div>
</template>

<script>

import PostAccordianItem from './PostAccordianItem.vue';

export default {
  name: 'PostList',
  data() {
    return {
      post: [
        { id: 1, postTitle: 'post 1' },
        { id: 2, postTitle: 'post 2' },
        { id: 3, postTitle: 'post 3' },
        { id: 4, postTitle: 'post 4' },
        { id: 5, postTitle: 'post 5' },
      ],
    };
  },
  components: {
    PostAccordianItem,
  },

};
</script>
