<template>
  <div>
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
const movies = useState(() => [])
const series = useState(() => [])
const { data } = await useFetch('/api/movies/discover', {
  transform: (data) => {
    movies.value = data.movies.results
    series.value = data.series.results
  },
})
</script>
