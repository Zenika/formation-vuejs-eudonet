<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="field">
      <label class="label">Search</label>
      <div class="control">
        <input
          data-cy="search"
          class="input"
          type="text"
          placeholder="Game of Thrones, Breaking Bad, ..."
          v-model.lazy="store.searchTerm"
          v-focus
        />
      </div>
    </div>
    <CardShow
      v-for="show of store.filteredShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="store.toggleFavorite(show.id)"
    />
  </div>
</template>

<script setup>
import CardShow from '@/components/CardShow.vue'
import { ref } from 'vue'
import { useStore } from '@/store'

const title = 'My TV shows'

const store = useStore()
</script>
