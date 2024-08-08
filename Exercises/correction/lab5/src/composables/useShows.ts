import { ref, computed } from 'vue'
import data from '@/../../../resources/server-formation-vue/shows'

const useShows = () => {
  const title = 'My TV shows'
  const shows = ref(data)
  const searchTerm = ref('')

  const filteredShows = computed(() =>
    shows.value.filter((show) =>
      show.title.toUpperCase().includes(searchTerm.value.toUpperCase())
    )
  )

  function toggleFavorite(show) {
    console.log(`${show.title} toggled favorite state`)
    show.user.favorited = !show.user.favorited
  }

  return {
    title,
    shows,
    searchTerm,
    filteredShows,
    toggleFavorite,
  }
}

export default useShows
