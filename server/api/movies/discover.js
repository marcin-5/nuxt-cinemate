const API_BASE_URL = 'https://api.themoviedb.org/3/discover'
const COMMON_QUERY_PARAMS = {
  include_adult: false,
  include_video: false,
  language: 'en-US',
  page: '1',
  sort_by: 'popularity.desc',
}

async function fetchData(url, accessToken, extraParams = {}) {
  return await $fetch(url, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    query: {
      ...COMMON_QUERY_PARAMS,
      ...extraParams,
    },
  })
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { accessToken } = config

  const movies = await fetchData(`${API_BASE_URL}/movie`, accessToken)
  const series = await fetchData(`${API_BASE_URL}/tv`, accessToken, {
    include_null_first_air_dates: false,
  })
  return { movies, series }
})
