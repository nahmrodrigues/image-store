<template>
  <q-header elevated>
    <q-toolbar>
      <q-icon name="image" :size="'md'" />

      <q-toolbar-title>IMAGE STORE</q-toolbar-title>

      <q-btn v-if="isLoggedIn" flat round dense icon="logout" label="Logout" @click="logout"/>
      <q-btn v-else flat round dense icon="login" label="Login" @click="login"/>
    </q-toolbar>

    <q-tabs v-model="tab" v-if="isLoggedIn">
      <q-route-tab :to="{name: 'images'}" exact name="images" label="Images"/>
      <q-route-tab :to="{name: 'upload'}" exact name="upload" label="Upload"/>
    </q-tabs>
  </q-header>
</template>

<script setup>
import store from '../store'
import { computed } from 'vue'

const isLoggedIn = computed(() => store.getters['isLoggedIn'])

const login = () => {
  store.dispatch('login')
}

const logout = () => {
  store.dispatch('logout');
}

</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>