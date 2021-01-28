<template>
  <div class="layout">
    <nav class="layout__sidebar">
      <div class="icon">

      </div>
      
      <ul class="menu">
        <li
          v-for="item in routesData"
          :key="item.name"
          class="menu__item"
          @click="router.push(item.path)">
          {{ t(item.name) }}
        </li>
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
import { defineComponent, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { routes } from '@/router/routes'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const { t } = useI18n()
    const route = useRoute()
    const router = useRouter()
    const routesData = reactive(routes)
    

    return {
      t,
      route,
      router,
      routesData,
    }
  }
})
</script>

<style src="@/style/layout.scss" scoped></style>