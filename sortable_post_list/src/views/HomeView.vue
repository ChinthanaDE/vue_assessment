<template>
   <div class="home-component-container relative">
    <SkewedBackground @animationEnd="onBackgroundAnimationEnd" />
    <transition name="fade-slide-in">
      <div
        class="container mx-auto relative z-10 lg:p-8 lg:flex flex-wrap"
        v-if="!isBackgroundAnimating"
      >
        <PostList />
      </div>
    </transition>
  </div>
</template>

<script>
import SkewedBackground from '../components/SkewedBackground.vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'HomeView',
  components: {
    SkewedBackground,
    PostList,
  },
};
</script>
