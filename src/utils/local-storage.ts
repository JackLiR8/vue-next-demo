import { reactive, watchEffect } from 'vue'

export default function useLocalStorage(key: string, defaultValue: object) {
  const data = reactive({})

  const value = localStorage[key] || defaultValue
  Object.assign(data, value && JSON.parse(value)) 
  
  watchEffect(() => localStorage[key] = JSON.stringify(data))

  return data
}