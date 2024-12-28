const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming'

export default defineEventHandler(async (event) => {
  const { accessToken } = useRuntimeConfig(event)

  const upcomingMovies = await $fetch(UPCOMING_MOVIES_URL, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return { upcomingMovies }
})
