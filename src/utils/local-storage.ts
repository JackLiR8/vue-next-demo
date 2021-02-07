import { reactive, watchEffect } from 'vue'
interface Value {
  [key: string]: any
}

export default function useLocalStorage(key: string, defaultValue: Value) {
  const data = reactive<Value>({})

  const value = localStorage[key]
  Object.assign(data, value && JSON.parse(value)  || defaultValue) 
  
  watchEffect(() => localStorage[key] = JSON.stringify(data))

  return data
}