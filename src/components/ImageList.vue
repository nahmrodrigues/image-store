<template>
  <div v-if="isLoggedIn"  class="images-container">
    <img v-for="image in allImages" :key="image.id" :src="image.link"/>
  </div>
  <h2 v-else>Log in to get started!</h2>
</template> 

<script setup>
import store from '../store';
import { computed, onMounted } from 'vue'

const allImages = computed(() => store.getters['allImages']);
const isLoggedIn = computed(() => store.getters['isLoggedIn']);

onMounted(() => {
  store.dispatch('fetchImages');
})

</script>

<style scoped>
.images-container {
  column-count: 2;
  column-gap: 0;
}

img { 
  max-width: 100%;
  padding: 5px;
}
</style>