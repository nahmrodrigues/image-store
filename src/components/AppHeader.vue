<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      Image Store
    </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/"  class="ui item">
          Galleries
        </router-link>
        <router-link to="/upload"  class="ui item">
          Upload
        </router-link>
        <a href="#" class="ui item" @click="logout">
          Logout
        </a>
      </div>
      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
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