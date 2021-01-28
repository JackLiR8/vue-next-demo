<template>
  <div class="layout">
    <nav class="layout__sidebar">
      <div class="icon">

      </div>
      
      <ul class="menu">
        <li class="menu__item">home</li>
        <li class="menu__item">about</li>
      </ul>
    </nav>
    <main class="layout__container">
      <header class="layout__container__header">

      </header>
      <section class="layout__container__content">
        <slot></slot>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MainLayout',

})
</script>

<style src="@/style/layout.scss" scoped>

</style>