export async function fetchData(url, movieKey = '', seriesKey = '') {
  const movies = ref([])
  const series = ref([])

  const { data, error } = await useFetch(url)

  if (data?.value) {
    movies.value = extractKeyResults(data.value, movieKey)
    series.value = extractKeyResults(data.value, seriesKey)
  } else if (error?.value) {
    handleError(error.value)
  }

  return { movies, series, error }
}

function extractKeyResults(data, key) {
  return key ? data[key]?.results || [] : []
}

function handleError(error) {
  console.error('Fetch error:', error)
}
