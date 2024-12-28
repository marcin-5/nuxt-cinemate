<template>
  <ErrorAlert v-if="error" :error="error" />
  <div v-else>
    <!-- Popular Movies Section -->
    <ContentSection title="Popular Movies" :items="movies" :cardComponent="MovieCard" />

    <!-- Popular Tv Series Section -->
    <ContentSection title="Popular Tv Series" :items="series" :cardComponent="SeriesCard" />
  </div>
</template>

<script setup>
import { fetchData } from '/composables/fetchData.js'
import ErrorAlert from '/components/ErrorAlert.vue'
import MovieCard from '/components/MovieCard.vue'
import SeriesCard from '/components/SeriesCard.vue'
import ContentSection from '/components/ContentSection.vue'

const { movies, series, error } = await fetchData('/api/movies/popular', 'popularMovies', 'popularSeries')
</script>
