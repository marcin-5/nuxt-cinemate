<template>
  <ErrorAlert v-if="error" :error="error" />
  <div v-else>
    <!-- Upcoming Movies Section -->
    <ContentSection title="Upcoming Movies" :items="movies" :cardComponent="MovieCard" />
  </div>
</template>

<script setup>
import { fetchData } from '/composables/fetchData.js'
import ErrorAlert from '/components/ErrorAlert.vue'
import ContentSection from '/components/ContentSection.vue'
import MovieCard from '/components/MovieCard.vue'

const { movies, series, error } = await fetchData('/api/movies/upcoming', 'upcomingMovies')
</script>
