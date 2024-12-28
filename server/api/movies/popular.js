const API_BASE_URL = 'https://api.themoviedb.org/3'

async function fetchData(url, accessToken = {}) {
  return await $fetch(url, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { accessToken } = config

  const popularMovies = await fetchData(`${API_BASE_URL}/movie/popular`, accessToken)
  const popularSeries = await fetchData(`${API_BASE_URL}/tv/popular`, accessToken)
  return { popularMovies, popularSeries }
})
