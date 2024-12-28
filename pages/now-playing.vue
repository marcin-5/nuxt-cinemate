<template>
  <ErrorAlert v-if="error" :error="error" />
  <div v-else>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Now Playing Movies
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="movie in movies">
          <MovieCard :item="movie" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { fetchData } from '/composables/fetchData.js'
import ErrorAlert from '/components/ErrorAlert.vue'

const { movies, series, error } = await fetchData('/api/movies/nowPlaying', 'nowPlayingMovies')
</script>
