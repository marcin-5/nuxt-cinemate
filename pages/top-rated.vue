<template>
  <ErrorAlert v-if="error" :error="error" />
  <div v-else>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Top Rated Movies
      </h1>

      <ul class="grid grid-cols-5 gap mb-10">
        <li v-for="movie in movies">
          <MovieCard
            :poster_path="movie.poster_path"
            :title="movie.title"
            :id="movie.id"
            :overview="movie.overview"
            :release_date="movie.release_date"
            :popularity="movie.popularity"
            :item="movie"
          />
        </li>
      </ul>
    </section>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Top Rated Tv Series
      </h1>

      <ul class="grid grid-cols-5 gap">
        <li v-for="tvSeries in series">
          <SeriesCard
            :poster_path="tvSeries.poster_path"
            :name="tvSeries.name"
            :overview="tvSeries.overview"
            :first_air_date="tvSeries.first_air_date"
            :popularity="tvSeries.popularity"
            :item="tvSeries"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { fetchData } from '/composables/fetchData.js'
import ErrorAlert from '/components/ErrorAlert.vue'

const { movies, series, error } = await fetchData('/api/movies/topRated', 'topRatedMovies', 'topRatedSeries')
</script>
