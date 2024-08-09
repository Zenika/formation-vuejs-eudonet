import { defineStore } from 'pinia'
import { API } from '@/api'
import { computed, ref } from 'vue'
import type { ShowInterface } from '@/model'

export const useStore = defineStore('main', () => {
  const shows = ref<ShowInterface[]>([])
  const searchTerm = ref('')

  const filteredShows = computed(() =>
    shows.value.filter((show) =>
      show.title.toUpperCase().includes(searchTerm.value.toUpperCase())
    )
  )
  const favoriteShows = computed(() =>
    shows.value.filter((show) => show.user.favorited)
  )

  async function fetchShows() {
    const { data } = await API.get<ShowInterface[]>('/shows')
    shows.value = data
  }

  async function toggleFavorite(showId?: number) {
    if (!showId) {
      return
    }
    const show = shows.value.find((show) => show.id === showId)
    if (!show) {
      console.error('there is no show matching this ID')
      return
    }

    show.user.favorited = !show.user.favorited

    await API.post(`/shows/${showId}/favorites`, {
      isFavorite: show.user.favorited,
    })
  }

  return {
    shows,
    filteredShows,
    favoriteShows,
    searchTerm,
    fetchShows,
    toggleFavorite,
  }
})
