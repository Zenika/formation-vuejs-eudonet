// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('/rest/shows', {
      fixture: 'shows.json',
    }).as('shows')
    cy.visit('/')
    cy.wait('@shows')
  })

  it('lists the shows', () => {
    cy.contains('h1', 'My TV shows')
    cy.get('[data-cy=card-show]').should('have.length', 2)
  })

  it('displays details about the Vampire Diaries show', () => {
    cy.get('[data-cy=card-show]')
      .first()
      .should('contain.text', 'The Vampire Diaries is not your favorite')
  })

  it('searches for a particular show', () => {
    cy.get('input[data-cy=search]').type('Vampire{enter}')
    cy.get('[data-cy=card-show]').should('have.length', 1)
    cy.get('[data-cy=card-show]')
      .first()
      .should('contain.text', 'Vampire Diaries')
    cy.get('input[data-cy=search]').clear().type('{enter}')
    cy.get('[data-cy=card-show]').should('have.length', 2)
  })

  it('toggles favorite status', () => {
    cy.intercept('POST', '/rest/shows/*/favorites', (req) => {
      req.reply({
        statusCode: 200,
      })
    }).as('postFavorite')

    cy.get('[data-cy=card-show]')
      .first()
      .then((cardShow) => {
        cy.wrap(cardShow).should(
          'contain.text',
          'The Vampire Diaries is not your favorite'
        )
        cy.wrap(cardShow).find('[data-cy=toggle-favorite]').click()

        cy.wait('@postFavorite')

        cy.wrap(cardShow).should(
          'contain.text',
          'The Vampire Diaries is your favorite'
        )
      })
  })
})
