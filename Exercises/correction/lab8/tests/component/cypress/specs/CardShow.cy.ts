import { mount } from 'cypress/vue'
import CardShow from '../../../../src/components/CardShow.vue'

describe('CardShow', () => {
  const mockShow = {
    id: 1,
    title: 'The Walking Dead',
    creation: '2010',
    seasons: 10,
    genres: ['Adventure', 'Drama', 'Horror', 'Thriller'],
    status: 'Continuing',
    description:
      'The world we knew is gone. An epidemic of apocalyptic proportions has swept the globe causing the dead to rise and feed on the living. In a matter of months society has crumbled. In a world ruled by the dead, we are forced to finally start living. Based on a comic book series of the same name by Robert Kirkman, this AMC project focuses on the world after a zombie apocalypse. The series follows a police officer, Rick Grimes, who wakes up from a coma to find the world ravaged with zombies. Looking for his family, he and a group of survivors attempt to battle against the zombies in order to stay alive.',
    images: {
      poster: 'https://via.placeholder.com/128x200',
    },
    user: {
      favorited: false,
    },
  }

  beforeEach(() => {
    cy.intercept('POST', '/shows', {
      statusCode: 200,
      body: { success: true },
    }).as('toggleFavoriteAPI')
  })

  it('should mounts component CardShow correctly', () => {
    cy.mount(CardShow, {
      props: {
        show: mockShow,
      },
    })

    cy.get('[data-cy="card-show"]').should('exist')
    cy.get('[data-cy="card-header-title"]').should(
      'have.text',
      'The Walking Dead is not your favorite!'
    )
    cy.get('[data-cy="card-show-status"]').should('have.text', 'Continuing')
    cy.get('[data-cy="card-show-status"]').should(
      'have.have.class',
      'is-warning'
    )
  })

  it('emits toggle-favorite event when favorite icon is clicked', () => {
    const onToggleFavorite = cy.stub().as('toggleFavoriteHandler')

    mount(CardShow, {
      props: {
        show: mockShow,
        onToggleFavorite,
      },
    })

    cy.get('[data-cy="toggle-favorite"]').click()
    cy.get('@toggleFavoriteHandler').should('have.been.calledOnce')
  })
})
