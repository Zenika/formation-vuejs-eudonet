import ShowList from './ShowList.vue'

describe('<ShowList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ShowList)
  })
})
