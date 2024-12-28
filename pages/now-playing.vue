<template>
  <ErrorAlert v-if="error" :error="error" />
  <div v-else>
    <!-- Now Playing Movies Section -->
    <ContentSection title="Now Playing Movies" :items="movies" :cardComponent="MovieCard" />
  </div>
</template>

<script setup>
import { fetchData } from '/composables/fetchData.js'
import ErrorAlert from '/components/ErrorAlert.vue'
import MovieCard from '/components/MovieCard.vue'
import ContentSection from '/components/ContentSection.vue'

const { movies, series, error } = await fetchData('/api/movies/nowPlaying', 'nowPlayingMovies')
</script>
