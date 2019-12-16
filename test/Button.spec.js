import { mount } from '@vue/test-utils'
import Button from '@/components/helpers/Button'

const wrapper = mount(Button)

describe('Button', () => {
  it('Component must contain a button tag', () => {
    expect(wrapper.contains('button')).toBeTruthy()
  })
})