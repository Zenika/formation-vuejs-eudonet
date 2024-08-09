<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <CardShow
      v-for="show of store.favoriteShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="store.toggleFavorite(show.id)"
    />
  </div>
</template>

<script lang="ts" setup>
import CardShow from '@/components/CardShow.vue'
import { ref } from 'vue'
import { useStore } from '@/store'

const title = ref('My favorite TV shows')

const store = useStore()
</script>
