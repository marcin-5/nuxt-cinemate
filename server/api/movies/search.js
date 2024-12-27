const MOVIE_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
const SERIES_SEARCH_URL = 'https://api.themoviedb.org/3/search/tv'

const fetchResults = async (url, searchTerm, accessToken) => {
  return await $fetch(url, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    query: {
      query: searchTerm,
    },
  })
}

export default defineEventHandler(async (event) => {
  const { searchTerm } = getQuery(event)
  const { AccessToken } = useRuntimeConfig(event)

  const movies = await fetchResults(MOVIE_SEARCH_URL, searchTerm, AccessToken)
  const series = await fetchResults(SERIES_SEARCH_URL, searchTerm, AccessToken)

  return { movies, series }
})
