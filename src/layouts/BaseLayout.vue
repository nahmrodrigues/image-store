<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo menu-centered"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0">IMAGE STORE</el-menu-item>
          <div class="flex-grow" />
          <div v-if="isLoggedIn" class="menu-items" >
            <router-link to="/images" ><el-menu-item index="1">Images</el-menu-item></router-link>
            <router-link to="/upload"><el-menu-item index="2">Upload</el-menu-item></router-link>
          </div>
          <div class="flex-grow" />
          <el-button v-if="isLoggedIn" type="danger" @click="logout">Logout</el-button>
          <el-button v-else type="primary" @click="login">Login</el-button>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import store from '../store';
import { computed } from 'vue';
import { ref } from 'vue'

const activeIndex = ref('1')

const isLoggedIn = computed(() => store.getters['isLoggedIn']);

const login = () => {
  store.dispatch('login');
}

const logout = () => {
  store.dispatch('logout');
}

const handleSelect = (key) => {
  activeIndex.value = key
}
</script>

<style scoped>

.el-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-grow {
  flex-grow: 1;
}

.menu-centered {
  align-items: center;
}

.menu-items {
  display: flex;
}

a { 
  text-decoration: none;
}
</style>