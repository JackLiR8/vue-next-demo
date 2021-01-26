import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('hello-world', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello World'
    }
  })

  it('show props msg', () => {
    const msgDisplay = wrapper.get('[data-test="msg-display"]')
    expect(msgDisplay.text()).toBe('Hello World')
  })

  it('increaments a count when button is clicked', async() => {
    const button = wrapper.get('[data-test="button"]')
    button.trigger('click')
    await wrapper.vm.$nextTick()

    expect(button.text()).toBe('count is: 1')
  })
})