<template>
  <div class="images-container">
    <img v-for="image in allImages" :key="image.id" :src="image.link"/>
  </div>
</template> 

<script setup>
import store from '../store';
import { computed, onMounted } from 'vue'

const allImages = computed(() => store.getters['allImages']);

onMounted(() => {
  store.dispatch('fetchImages');
})

</script>

<style scoped>
.images-container {
  column-count: 3;
  column-gap: 0;
}

img { 
  max-width: 100%;
  padding: 5px;
}
</style>