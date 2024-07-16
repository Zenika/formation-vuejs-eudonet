<template>
  <div>
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
            <img src="./assets/img/logo.jpg" alt="" />
            TV shows store
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <a class="navbar-item is-active" href="index.html">Search</a>
          </div>
        </div>
      </nav>
    </div>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
          <div class="field">
            <label class="label">Search</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Game of Thrones, Breaking Bad, ..."
              />
            </div>
          </div>

          <div v-for="show in shows" :key="show.id" class="card card-result">
            <div class="card-header">
              <p class="card-header-title">{{ show.title }}</p>
              <a class="card-header-icon">
                <span
                  class="icon"
                  :class="{ 'is-favorite': show.user.favorited }"
                >
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
                  <p>
                    Created in {{ show.creation }} - {{ show.seasons }} seasons
                  </p>
                  <p class="tags">
                    <span
                      v-for="(genre, index) in show.genres"
                      :key="index"
                      class="tag"
                      >{{ genre }}</span
                    >
                  </p>
                  <p class="tags">
                    <span
                      class="tag"
                      :class="[
                        show.status === 'Continuing'
                          ? 'is-warning'
                          : 'is-danger',
                      ]"
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import shows from '../../../resources/server-formation-vue/shows.js'

export default defineComponent({
  data() {
    return {
      title: 'My TV shows',
      shows,
    }
  },
})
</script>
