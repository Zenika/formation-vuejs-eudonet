/// <reference types="cypress" />

describe('Details', () => {
  beforeEach(() => {
    cy.intercept('/rest/shows', {
      fixture: 'shows.json',
    }).as('shows')
    cy.visit('/')
    cy.wait('@shows')
  })

  it('show details', () => {
    cy.contains('h1', 'My TV shows')
    cy.get('[data-cy=card-show]').should('have.length', 2)

    cy.contains('The Vampire Diaries').click()

    cy.contains('h1', 'The Vampire Diaries')
    cy.contains('Created in 2009 - 8 seasons')
    cy.get('[data-cy=card-show-genre]').contains('Drama')
    cy.get('[data-cy=card-show-genre]').contains('Horror')
    cy.get('[data-cy=card-show-genre]').contains('Romance')
    cy.get('[data-cy=card-show-genre]').contains('Fantasy')
    cy.get('[data-cy=card-show-status]').contains('Ended')
    cy.contains('As the school year begins')
  })
})
