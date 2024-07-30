import CardShow from '../../../../src/components/CardShow.vue'
// TO REVAMP
// Should we use cypress for component testing?
describe('<CardShow />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CardShow)
  })
})
