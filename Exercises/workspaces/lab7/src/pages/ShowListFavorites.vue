<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <CardShow
      v-for="show of favoriteShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="toggleFavorite(show)"
    />
  </div>
</template>

<script setup>
import CardShow from '@/components/CardShow.vue'
import { API } from '@/api'
import { ref, computed, onBeforeMount } from 'vue'

const title = ref('My favorite TV shows')
const shows = ref([])

function toggleFavorite(show) {
  show.user.favorited = !show.user.favorited

  API.post(`/shows/${show.id}/favorites`, {
    isFavorite: show.user.favorited,
  })
}

const favoriteShows = computed(() =>
  shows.value.filter((show) => show.user.favorited)
)

onBeforeMount(() => {
  API.get('/shows').then((response) => {
    shows.value = response.data
  })
})
</script>
