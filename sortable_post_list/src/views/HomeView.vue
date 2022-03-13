<template>
<div class="lg:w-1/2 px-6">
    <div class="text-3xl font-semibold text-white lg:pb-4 lg:py-0 py-4">
      Soratble Post List
    </div>
   <SkewedBackground @animationEnd="onBackgroundAnimationEnd" />
   <PostAccordianItem
          v-for="(post, index) in posts"
          :key="post.id"
          :title="post.title"
          :arrows="generateArrow(index)"
        />
        </div>
</template>

<script>
import { reactive } from 'vue';
import SkewedBackground from '../components/SkewedBackground.vue';
import PostAccordianItem from '../components/PostAccordianItem.vue';
import post from '../mokData/postItem';

export const store = reactive({
  post,
});

export default {
  name: 'HomeView',
  components: {
    SkewedBackground,
    PostAccordianItem,
  },
};
</script>
