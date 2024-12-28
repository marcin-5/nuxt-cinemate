<template>
  <ErrorAlert v-if="error" :error="error" />
  <div v-else>
    <!-- Top Rated Movies Section -->
    <ContentSection title="Top Rated Movies" :items="movies" :cardComponent="MovieCard" />

    <!-- Top Rated Tv Series Section -->
    <ContentSection title="Top Rated Tv Series" :items="series" :cardComponent="SeriesCard" />
  </div>
</template>

<script setup>
import { fetchData } from '/composables/fetchData.js'
import ErrorAlert from '/components/ErrorAlert.vue'
import MovieCard from '/components/MovieCard.vue'
import SeriesCard from '/components/SeriesCard.vue'
import ContentSection from '/components/ContentSection.vue'

const { movies, series, error } = await fetchData('/api/movies/topRated', 'topRatedMovies', 'topRatedSeries')
</script>
