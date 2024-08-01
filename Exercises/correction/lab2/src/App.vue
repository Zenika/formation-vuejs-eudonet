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

          <div class="card card-result">
            <div class="card-header">
              <p class="card-header-title">Game of Thrones is your favorite!</p>
              <a class="card-header-icon">
                <span class="icon">
                  <i class="fa fa-star"></i>
                </span>
              </a>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-128x200">
                    <img
                      src="https://versions.bulma.io/0.7.0/images/placeholders/480x600.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p>Created in 2011 - 8 seasons</p>
                  <p class="tags">
                    <span class="tag">Adventure, Drama, Fantasy</span>
                  </p>
                  <p class="tags">
                    <span class="tag is-primary">Ended</span>
                  </p>
                  <div class="content">
                    Seven noble families fight for control of the mythical land
                    of Westeros. Friction between the houses leads to full-scale
                    war. All while a very ancient evil awakens in the farthest
                    north. Amidst the war, a neglected military order of
                    misfits, the Night's Watch, is all that stands between the
                    realms of men and the icy horrors beyond.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card card-result">
            <div class="card-header">
              <p class="card-header-title">
                The Walking Dead is not your favorite!
              </p>
              <a class="card-header-icon">
                <span class="icon">
                  <i class="fa fa-star"></i>
                </span>
              </a>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-128x200">
                    <img
                      src="https://versions.bulma.io/0.7.0/images/placeholders/480x600.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p>Created in 2010 - 10 seasons</p>
                  <p class="tags">
                    <span class="tag">Adventure, Drama, Horror, Thriller</span>
                  </p>
                  <p class="tags">
                    <span class="tag is-primary">Continuing</span>
                  </p>
                  <div class="content">
                    The world we knew is gone. An epidemic of apocalyptic
                    proportions has swept the globe causing the dead to rise and
                    feed on the living. In a matter of months society has
                    crumbled. In a world ruled by the dead, we are forced to
                    finally start living. Based on a comic book series of the
                    same name by Robert Kirkman, this AMC project focuses on the
                    world after a zombie apocalypse. The series follows a police
                    officer, Rick Grimes, who wakes up from a coma to find the
                    world ravaged with zombies. Looking for his family, he and a
                    group of survivors attempt to battle against the zombies in
                    order to stay alive.
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
export default defineComponent({
  data() {
    return {
      title: import.meta.env.VITE_APP_TITLE,
    }
  },
})
</script>
