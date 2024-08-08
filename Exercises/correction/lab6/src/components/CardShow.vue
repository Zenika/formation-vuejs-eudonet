<template>
  <div class="card card-result">
    <div class="card-header">
      <p class="card-header-title">
        <router-link :to="{ name: 'showDetail', params: { showId: show.id } }">
          {{ titleFavorite }}
        </router-link>
        <button
          class="button is-info is-small is-rounded ml-2"
          @click="copyClipboard(show.title)"
        >
          Copier le titre
        </button>
      </p>
      <a class="card-header-icon" @click="toggleFavorite">
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
          <p class="tags">
            <span class="tag" v-for="genre of show.genres" :key="genre">{{
              genre
            }}</span>
          </p>
          <p class="tags">
            <span
              class="tag"
              :class="[statusIsContinuing ? 'is-warning' : 'is-danger']"
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
import { useClipboard } from '@vueuse/core'
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

const { copy } = useClipboard()
function copyClipboard(title) {
  copy(title)
  alert(`${title} est dans ton presse-papiers !`)
}
</script>
