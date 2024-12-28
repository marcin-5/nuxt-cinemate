<template>
  <div class="my-2 mx-1">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <NuxtLink @click="changeItemState(item)" :to="`/item/${item.title}`">
        <img class="rounded-t-lg" :src="`${imageSiteUrl}${item.poster_path}`" alt="Movie Image" />
      </NuxtLink>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Release Date: {{ item.release_date }}</p>
        <p
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {{ item.overview || 'No Overview Available' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['item'])

const imageSiteUrl = 'https://image.tmdb.org/t/p/w500'

const itemState = useState('chosenItem', () => {})
const changeItemState = (item) => {
  itemState.value = item
}
</script>
