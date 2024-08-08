<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="store.toggleFavorite(show.id)" />
  </div>
</template>

<script setup>
import CardShow from '@/components/CardShow.vue'
import { computed } from 'vue'
import { useStore } from '@/store'

const props = defineProps(['showId'])

const store = useStore()
const show = computed(() => store.shows.find((show) => show.id == props.showId))
</script>
