<template>
  <div class="card card-result" data-cy="card-show">
    <div class="card-header">
      <p class="card-header-title" data-cy="card-header-title">
        <router-link :to="{ name: 'showDetail', params: { showId: show.id } }">
          {{ titleFavorite }}
        </router-link>
      </p>
      <a
        class="card-header-icon"
        @click="toggleFavorite"
        aria-label="Toggle favorite"
        data-cy="toggle-favorite"
      >
        <span class="icon" :class="{ 'is-favorite': show.user.favorited }">
          <i class="fa fa-star"></i>
        </span>
      </a>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x200">
            <img :src="show.images.poster" alt="" />
          </figure>
        </div>
        <div class="media-content">
          <p class>
            Created in {{ show.creation }} - {{ show.seasons }} seasons
          </p>
          <p class="tags" data-cy="card-show-genre">
            <span class="tag" v-for="genre of show.genres" :key="genre">{{
              genre
            }}</span>
          </p>
          <p class="tags">
            <span
              class="status tag"
              :class="[statusIsContinuing ? 'is-warning' : 'is-danger']"
              data-cy="card-show-status"
            >
              {{ show.status }}
            </span>
          </p>
          <div class="content">
            {{ show.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  show: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['toggle-favorite'])

const titleFavorite = computed(
  () =>
    `${props.show.title} is ${
      props.show.user.favorited ? '' : 'not '
    }your favorite!`
)

const statusIsContinuing = computed(() => props.show.status === 'Continuing')

function toggleFavorite() {
  emits('toggle-favorite')
}
</script>
