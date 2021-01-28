<template>
  <main-layout>
    <router-view></router-view>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/Layout.vue'

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>
