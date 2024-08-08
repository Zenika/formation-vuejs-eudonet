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
import useShow from '@/composables/useShow'
const title = 'My TV shows'
const { toggleFavorite, filteredShows, searchTerm } = useShow()
</script>
