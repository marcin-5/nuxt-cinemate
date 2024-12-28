const TOP_RATED_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated'
const TOP_RATED_SERIES_URL = 'https://api.themoviedb.org/3/tv/top_rated'

async function fetchTopRated(url, accessToken) {
  return await $fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export default defineEventHandler(async (event) => {
  const { AccessToken } = useRuntimeConfig(event)

  const topRatedMovies = await fetchTopRated(TOP_RATED_MOVIES_URL, AccessToken)
  const topRatedSeries = await fetchTopRated(TOP_RATED_SERIES_URL, AccessToken)

  return { topRatedMovies, topRatedSeries }
})
