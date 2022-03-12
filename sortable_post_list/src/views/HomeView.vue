<template>
<!-- todo: remove unit test: Soratble Post List  -->
    <div>
      Soratble Post List
    </div>
   <SkewedBackground @animationEnd="onBackgroundAnimationEnd" />
</template>

<script>
import SkewedBackground from '../components/SkewedBackground.vue';

export default {
  name: 'HomeView',
  components: {
    SkewedBackground,
  },
};
</script>
