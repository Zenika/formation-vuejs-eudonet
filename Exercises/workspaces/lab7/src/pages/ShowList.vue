<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="field">
      <label class="label">Search</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Game of Thrones, Breaking Bad, ..."
          v-model.lazy="searchTerm"
          v-focus
        />
      </div>
    </div>
    <CardShow
      v-for="show of filteredShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="toggleFavorite(show)"
    />
  </div>
</template>

<script setup>
import CardShow from '@/components/CardShow.vue'
import { ref, computed, onBeforeMount } from 'vue'
import { API } from '@/api'

const title = 'My TV shows'

const shows = ref([])

const searchTerm = ref('')

const filteredShows = computed(() =>
  shows.value.filter((show) =>
    show.title.toUpperCase().includes(searchTerm.value.toUpperCase())
  )
)
function toggleFavorite(show) {
  show.user.favorited = !show.user.favorited
  API.post(`/shows/${show.id}/favorites`, {
    isFavorite: show.user.favorited,
  })
}

onBeforeMount(async () => {
  const response = await API.get('/shows')
  shows.value = response.data
})
</script>
