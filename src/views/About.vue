<template>
  <div class="about-page">
    {{ t('page.about') }}
    <router-link to="/">{{ t('page.home') }}</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'About',

  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  }
})
</script>

<style lang="scss" scoped>
.about-page {
  color: $color-error;
  font-size: 20px;
}
</style>