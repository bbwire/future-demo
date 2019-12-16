import { mount } from '@vue/test-utils'
import Input from '@/components/helpers/Input'

const wrapper = mount(Input)

describe('Input', () => {
  it('It must contain an input tag', () => {
    expect(wrapper.contains('input')).toBe(true)
  })
})

