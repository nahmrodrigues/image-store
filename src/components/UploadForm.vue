<template>
  <div class="dropper">
    <input 
      type="file" 
      multiple="true"
      accept="image/*"
      @change="uploadImages($event.target.files)"
    />
    <span>Drag files here!</span>
  </div>
</template> 

<script setup>
import store from '../store'

const uploadImages = (images) => {
  store.dispatch('uploadImages', images)
}
</script>

<style scoped>
.dropper {
  height: 30vh;
  width: 60vw;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dropper:hover {
  background-color: #eee;
}

input { 
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
</style>