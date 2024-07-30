/// <reference types="cypress" />

describe('Favorite', () => {
  beforeEach(() => {
    cy.intercept('/rest/shows', {
      fixture: 'shows.json',
    }).as('shows')
    cy.visit('/favorites')
    cy.wait('@shows')
  })

  it('lists the favorites', () => {
    cy.contains('h1', 'My favorite TV shows')
    cy.get('[data-cy=card-show]').should('not.exist')

    cy.get('a').contains('Search').click()

    cy.intercept('POST', '/rest/shows/*/favorites', (req) => {
      req.reply({
        statusCode: 200,
      })
    }).as('postFavorite')

    cy.get('[data-cy=toggle-favorite]').click({ multiple: true })

    cy.get('@postFavorite.all').should('have.length', 2)

    cy.get('a').contains('Favorites').click()

    cy.contains('h1', 'My favorite TV shows')

    cy.get('[data-cy=card-show]').should('have.length', 2)
  })
})
