<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="toggleFavorite(show)" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardShow from '@/components/CardShow.vue'
import useShow from '@/composables/useShow'

const props = defineProps(['showId'])

const { toggleFavorite, shows } = useShow()
const show = ref(null)
onMounted(() => {
  show.value = shows.value.find((show) => show.id.toString() === props.showId)
})
</script>
