<template>
  <div>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>

<style>

</style>