<template>
  Please wait...
</template>

<script setup>
import store from '../store'
import { onMounted } from 'vue'

onMounted(() => {
  store.dispatch('finalizeLogin', window.location.hash)
})
</script>