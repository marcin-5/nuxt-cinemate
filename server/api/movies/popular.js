const API_BASE_URL = 'https://api.themoviedb.org/3'

async function fetchData(url, AccessToken = {}) {
  return await $fetch(url, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
  })
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { AccessToken } = config

  const popularMovies = await fetchData(`${API_BASE_URL}/movie/popular`, AccessToken)
  const popularSeries = await fetchData(`${API_BASE_URL}/tv/popular`, AccessToken)
  return { popularMovies, popularSeries }
})
