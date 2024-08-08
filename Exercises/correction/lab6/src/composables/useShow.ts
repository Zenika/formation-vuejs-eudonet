import { computed, ref } from 'vue'
import type { Show } from '../../../../resources/server-formation-vue/shows'
import data from '../../../../resources/server-formation-vue/shows'

const useShow = () => {
  const shows = ref(data)
  function toggleFavorite(show: Show) {
    show.user.favorited = !show.user.favorited
  }
  const searchTerm = ref('')

  const favoriteShows = computed(() =>
    shows.value.filter((show) => show.user.favorited)
  )

  const filteredShows = computed(() =>
    shows.value.filter((show) =>
      show.title.toUpperCase().includes(searchTerm.value.toUpperCase())
    )
  )

  return {
    toggleFavorite,
    shows,
    searchTerm,
    favoriteShows,
    filteredShows,
  }
}

export default useShow
