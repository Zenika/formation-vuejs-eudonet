<template>
  <div class="card card-result">
    <div class="card-header">
      <p class="card-header-title">{{ titleFavorite }}</p>
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
            <!-- Clipboard -->
            <div v-if="isSupported">
              <button
                @click="copy(show.description)"
                class="button tag is-info"
              >
                <span v-if="!copied">Copy</span>
                <span v-else>Copied!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useClipboard } from '@vueuse/core'

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

const { copy, copied, isSupported } = useClipboard({
  source: props.show.description,
})
</script>
