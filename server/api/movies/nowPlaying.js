const NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { AccessToken } = config

  const nowPlayingMovies = await $fetch(NOW_PLAYING_MOVIES_URL, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
  })
  return { nowPlayingMovies }
})
