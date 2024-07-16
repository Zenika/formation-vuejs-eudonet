<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="toggleFavorite(show)" />
  </div>
</template>

<script setup>
import CardShow from '@/components/CardShow.vue'
import { API } from '@/api'
import { ref, onMounted } from 'vue'

const props = defineProps(['showId'])

const show = ref(null)

onMounted(() => {
  API.get(`/shows/${props.showId}`).then((response) => {
    show.value = response.data
  })
})
function toggleFavorite(show) {
  show.user.favorited = !show.user.favorited

  API.post(`/shows/${show.id}/favorites`, {
    isFavorite: show.user.favorited,
  })
}
</script>
