const API_BASE_URL = 'https://api.themoviedb.org/3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { AccessToken } = config

  const nowPlayingMovies = await $fetch(API_BASE_URL + '/movie/now_playing', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
  })
  return { nowPlayingMovies }
})
