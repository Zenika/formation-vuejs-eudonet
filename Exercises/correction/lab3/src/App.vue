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
                v-model.lazy="searchTerm"
              />
            </div>
            <!-- <SearchForm v-model="searchTerm" /> -->
          </div>
          <CardShow
            v-for="show of filteredShows"
            :key="show.id"
            :show="show"
            @toggle-favorite="toggleFavorite(show)"
          >
          </CardShow>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import shows from '@/../../../resources/server-formation-vue/shows'
import CardShow from './components/CardShow.vue';
// import SearchForm from './components/SearchForm.vue'

export default defineComponent({
  components: {
    CardShow,
    // SearchForm,
  },
  data() {
    return {
      title: 'My TV shows',
      shows,
      searchTerm: '',
    }
  },
  computed: {
    filteredShows() {
      return this.shows.filter((show) =>
        show.title.toUpperCase().includes(this.searchTerm.toUpperCase())
      )
    },
  },
  methods: {
    toggleFavorite(show) {
      console.log(`${show.title} toggled favorite state`)
      show.user.favorited = !show.user.favorited
    },
  },
})
</script>
