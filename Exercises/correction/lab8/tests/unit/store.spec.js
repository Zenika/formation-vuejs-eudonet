import { API } from '@/api'
import { useStore } from '@/store'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'

// Mocking the API module
vi.mock('@/api', () => ({
  API: {
    get: vi.fn(),
    post: vi.fn(),
  },
}))

let store

describe('store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useStore()
  })

  it('initializes with an empty array and empty searchTerm', () => {
    expect(store.searchTerm).toBe('')
    expect(store.shows).toEqual([])
  })

  it('filter shows based on searchTerm', () => {
    store.shows = [
      { title: 'Game of Thones' },
      { title: 'The Walking Dead' },
      { title: 'Breaking Bad' },
    ]

    store.searchTerm = 'the'

    expect(store.filteredShows).toEqual([{ title: 'The Walking Dead' }])
  })

  it('fetches shows from API and sets show state', async () => {
    const mockShows = [
      { id: 1, title: 'Game of Thones', user: { favorited: false } },
      { id: 2, title: 'The Walking Dead', user: { favorited: true } },
    ]
    API.get.mockResolvedValue({ data: mockShows })
    await store.fetchShows()

    expect(store.shows).toEqual(mockShows)
    expect(API.get).toHaveBeenCalledWith('/shows')
  })

  it('toggles favorite status of a show', async () => {
    store.shows = [
      { id: 1, title: 'Game of Thones', user: { favorited: false } },
      { id: 2, title: 'The Walking Dead', user: { favorited: true } },
    ]

    await store.toggleFavorite(1)
    expect(store.shows[0].user.favorited).toBe(true)
    expect(API.post).toHaveBeenCalledWith('/shows/1/favorites', {
      isFavorite: true,
    })

    await store.toggleFavorite(2)
    expect(store.shows[1].user.favorited).toBe(false)
    expect(API.post).toHaveBeenCalledWith('/shows/2/favorites', {
      isFavorite: false,
    })
  })

  /**
   * Bonus
   * Test paramétrés
   */
  it.each([
    [1, 'Game of Thrones', true],
    [2, 'The Walking Dead', false],
  ])('toggle (%i , %s)', async (id, title, expected) => {
    store.shows = [{ id, title, user: { favorited: !expected } }]

    await store.toggleFavorite(id)

    expect(store.shows[0].user.favorited).toBe(expected)
    expect(API.post).toHaveBeenCalledWith(`/shows/${id}/favorites`, {
      isFavorite: expected,
    })
  })
})
