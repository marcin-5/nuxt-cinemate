<template>
  <div
    v-if="error"
    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
    role="alert"
  >
    {{ error }}
  </div>
  <div v-else>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Featured Movies
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="movie in movies">
          <MovieCard :item="movie" />
        </li>
      </ul>
    </section>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Featured Tv Series
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="tvSeries in series">
          <SeriesCard :item="tvSeries" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { fetchData } from '/composables/fetchData.js'

const { movies, series, error } = await fetchData('/api/movies/discover', 'movies', 'series')
</script>
