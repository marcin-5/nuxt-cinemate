<template>
  <div>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Popular Movies
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
        Popular Tv Series
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
const movies = useState(() => [])
const series = useState(() => [])
const { data } = await useFetch('/api/movies/popular', {
  transform: (data) => {
    movies.value = data.popularMovies.results
    series.value = data.popularSeries.results
  },
})
</script>
