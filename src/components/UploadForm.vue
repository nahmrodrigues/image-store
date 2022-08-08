<template>
  <div class="dropper">
    <input 
      type="file" 
      multiple="true"
      accept="image/*"
      @change="uploadImages($event.target.files)"
    />
    <span>
      <el-icon class="el-icon--upload" :size="50"><upload-filled /></el-icon>
      <p>Drag files here!</p>
    </span>
  </div>
</template> 

<script setup>
import store from '../store'
import { UploadFilled } from '@element-plus/icons-vue'

const uploadImages = (images) => {
  store.dispatch('uploadImages', images)
}
</script>

<style scoped>
.dropper {
  height: 30vh;
  width: 60vw;
  border: 1px dashed grey;
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

span { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>