<template>
  <h1 data-test="msg-display">{{ msg }}</h1>
  <button data-test="button" @click="count++">count is: {{ count }}</button>
  <div>
    <h3>use reactive</h3>
    First name: <input type="text" v-model="name.first"><br>
    Last name: <input type="text" v-model="name.last"><br>
    Full name: <span>{{ fullname }}</span>
  </div>
</template>

<script>
import { 
  defineComponent, 
  ref, 
  reactive, 
  computed, 
  watchEffect,
  watch
 } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  
  setup(props) {
    const count = ref(0)

    const name = reactive({ first: 'hello', last: 'world' })
    const fullname = computed(() => {
      return name.first + ' ' + name.last
    })

    return {
      count,
      name,
      fullname,
    }
  }
}) 
</script>
