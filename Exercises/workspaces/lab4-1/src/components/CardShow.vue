<template>
  <div class="card card-result">
    <div class="card-header">
      <p class="card-header-title">{{ titleFavorite }}</p>
      <a class="card-header-icon" @click="toggleFavorite()">
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

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  emits: ['toggle-favorite'],
  computed: {
    titleFavorite() {
      return `${this.show.title} is ${
        this.show.user.favorited ? '' : 'not '
      }your favorite!`
    },
    statusIsContinuing() {
      return this.show.status === 'Continuing'
    },
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite')
    },
  },
})
</script>
