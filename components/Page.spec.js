import { mount } from '@cypress/vue'
import Page from './Page.vue'

describe('Page', () => {
  it('renders a Page', () => {
    mount(Page)
  })
})
