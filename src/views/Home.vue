<template>
  <div>
    <HelloWorld :msg="msg" />
    <router-link to="/about">{{ t('page.about' )}}</router-link>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },

  setup() {
    const { t } = useI18n()
    const msg = computed(() => {
      return t('hello') + t('world')
    })

    return {
      t,
      msg,
    }
  }
})
</script>

<style>

</style>