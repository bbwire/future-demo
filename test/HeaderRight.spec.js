import { mount } from '@vue/test-utils'
import HeaderRight from '@/components/helpers/HeaderRight'

const wrapper = mount(HeaderRight)

describe('HeaderRight', () => {
  it('This component should have a class header-right', () => {
    expect(wrapper.classes()).toContain('header-right')
  })
})