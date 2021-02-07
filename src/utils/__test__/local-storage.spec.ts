import useLocalStorage from '../local-storage'
import { nextTick } from 'vue'

describe('useLocalStorage', () => {
  const data = useLocalStorage('value', { a: 1, b: 2})

  it('init localStorage correctly', () => {
    const value = JSON.parse(localStorage.getItem('value') as string)
    expect(value.a).toBe(1)
  })

  it('change in data affect localStorage', async() => {
    data.a = 3
    await nextTick()
    const value = JSON.parse(localStorage.getItem('value') as string)
    expect(value.a).toBe(3)
  })
})