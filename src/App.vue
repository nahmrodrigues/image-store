<template>
  <AppHeader/>
  <div class="ui container">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>
