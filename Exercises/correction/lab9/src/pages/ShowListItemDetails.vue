<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="store.toggleFavorite(show?.id)" />
  </div>
</template>

<script lang="ts" setup>
import CardShow from '@/components/CardShow.vue'
import { computed, type ComputedRef } from 'vue'
import { useStore } from '@/store'
import type { ShowInterface } from '@/model'

const props = defineProps({
  showId: {
    type: String,
    required: true,
  },
})

const store = useStore()
const show = computed(() =>
  store.shows.find((show) => show.id.toString() === props.showId)
) as ComputedRef<ShowInterface>
</script>
