<template>
  <q-layout view="lHh lpr lFf" container style="min-height: 100vh" class="shadow-2">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title><q-btn flat dense :size="'lg'" to="/"><q-icon class="q-px-sm" name="image" :size="'md'" /> IMAGE STORE</q-btn></q-toolbar-title>

        <q-btn v-if="isLoggedIn" flat round dense icon="logout" label="Logout" @click="logout"/>
        <q-btn v-else flat round dense icon="login" label="Login" @click="login"/>
      </q-toolbar>

      <q-tabs v-model="tab" v-if="isLoggedIn">
        <q-route-tab :to="{name: 'images'}" exact name="images" label="Images"/>
        <q-route-tab :to="{name: 'upload'}" exact name="upload" label="Upload"/>
      </q-tabs>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import store from '../store';
import { computed } from 'vue';

const isLoggedIn = computed(() => store.getters['isLoggedIn']);

const login = () => {
  store.dispatch('login');
}

const logout = () => {
  store.dispatch('logout');
}
</script>