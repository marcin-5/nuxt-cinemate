<template>
  <ErrorAlert v-if="error" :error="error" />
  <div v-else>
    <!-- Featured Movies Section -->
    <ContentSection title="Featured Movies" :items="movies" :cardComponent="MovieCard" />

    <!-- Featured TV Series Section -->
    <ContentSection title="Featured Tv Series" :items="series" :cardComponent="SeriesCard" />
  </div>
</template>

<script setup>
import { fetchData } from '/composables/fetchData.js'
import ErrorAlert from '/components/ErrorAlert.vue'
import ContentSection from '/components/ContentSection.vue'
import MovieCard from '/components/MovieCard.vue'
import SeriesCard from '/components/SeriesCard.vue'

const { movies, series, error } = await fetchData('/api/movies/discover', 'movies', 'series')
</script>
