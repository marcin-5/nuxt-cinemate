<template>
  <div>
    <section>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Upcoming Movies
      </h1>

      <ul class="grid grid-cols-5 gap">
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
        <br /><br />
      </ul>
    </section>
  </div>
</template>

<script setup>
const movies = useState(() => [])

const { data } = await useFetch('/api/movies/upcoming', {
  transform: (data) => {
    movies.value = data.upcomingMovies.results
  },
})
</script>
