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
import useShow from '@/composables/useShow'
const title = 'My favorite TV shows'
const { toggleFavorite, favoriteShows } = useShow()
</script>
